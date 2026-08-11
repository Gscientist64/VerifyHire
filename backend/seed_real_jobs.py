"""
Seed the database with the REAL job listings from the CSV file.

Run from the backend directory:
    python seed_real_jobs.py
"""

import csv
import os
import uuid
from datetime import datetime, timezone

from sqlalchemy import text

from app.core.database import SessionLocal, engine, Base
from app.core.security import get_password_hash
from app.models.user import User, UserRole
from app.models.company import Company
from app.models.job import Job, JobType

CSV_PATH = os.path.join(os.path.dirname(__file__), "..", "VerifyHire_Real_Job_Listings.csv")

# Companies that should start as unverified (missing public websites)
_UNVERIFIED_COMPANIES = {
    "Sage Grey Technologies Limited",
    "EasyPay International",
    "Tezza Business Solutions Limited",
    "Structured Resource Business Limited",
    "Luchys Luxe",
    "School Recruitment Network",
    "SENCE Limited",
    "Runola Nigeria Limited",
    "Innov8 Hub",
    "Grandville Medical and Laser Clinic",
    "Raptors Technologies Limited",
}


def parse_job_type(raw: str) -> JobType:
    """Map a CSV job-type string to the JobType enum."""
    raw = (raw or "").lower()
    if "remote" in raw:
        return JobType.REMOTE
    if "contract" in raw:
        return JobType.CONTRACT
    if "intern" in raw:
        return JobType.INTERNSHIP
    if "part" in raw:
        return JobType.PART_TIME
    return JobType.FULL_TIME


def build_description(title, company, location, job_type, salary, desc, requirement, website):
    """Build a rich markdown-style description from the CSV fields."""
    lines = [
        f"We are looking for a {title} to join {company}.",
        "",
        "## Job Overview",
        f"- **Company:** {company}",
        f"- **Location:** {location}",
        f"- **Job Type:** {job_type}",
        f"- **Salary:** {salary}",
    ]
    if website:
        lines.append(f"- **Company Website:** {website}")
    lines += [
        "",
        "## Job Description",
        desc or "No description provided.",
        "",
        "## Requirements",
        requirement or "No specific requirements listed.",
        "",
        "## How to Apply",
        "Click the Apply button on this listing to be taken to the official application page.",
        "",
        "Apply today and take the next step in your career with confidence!",
    ]
    return "\n".join(lines)


def seed():
    # ── Read CSV ──
    if not os.path.isfile(CSV_PATH):
        print(f"CSV file not found: {CSV_PATH}")
        return

    with open(CSV_PATH, newline="", encoding="utf-8-sig") as f:
        reader = csv.DictReader(f)
        rows = list(reader)

    print(f"Read {len(rows)} jobs from CSV")

    # ── Recreate all tables ──
    print("Dropping and recreating all tables…")
    Base.metadata.drop_all(bind=engine)
    Base.metadata.create_all(bind=engine)

    db = SessionLocal()

    # ── Users ──
    users = [
        User(
            identifier=uuid.uuid4(),
            full_name="Alice Admin",
            email="admin@verifyhire.com",
            hashed_password=get_password_hash("Admin@123"),
            role=UserRole.ADMIN,
            is_active=True,
            created_date=datetime.now(timezone.utc),
        ),
        User(
            identifier=uuid.uuid4(),
            full_name="Bob Seeker",
            email="user@verifyhire.com",
            hashed_password=get_password_hash("User@123"),
            role=UserRole.USER,
            is_active=True,
            created_date=datetime.now(timezone.utc),
        ),
        User(
            identifier=uuid.uuid4(),
            full_name="Carol Recruiter",
            email="recruiter@verifyhire.com",
            hashed_password=get_password_hash("Recruit@123"),
            role=UserRole.RECRUITER,
            is_active=True,
            company_name="Moniepoint Incorporated",
            created_date=datetime.now(timezone.utc),
        ),
    ]
    db.add_all(users)
    db.commit()
    print(f"  OK {db.query(User).count()} users")

    admin = db.query(User).filter(User.email == "admin@verifyhire.com").first()

    # ── Companies ──
    seen_companies = {}
    for row in rows:
        company_name = (row.get("Company Name") or "Unknown").strip()
        if company_name not in seen_companies:
            website = (row.get("Company Website") or "").strip()
            # Normalize website for display
            if website and website.lower() != "not publicly listed":
                if not website.startswith(("http://", "https://")):
                    website = f"https://{website}"
            else:
                website = None

            company = Company(
                identifier=uuid.uuid4(),
                name=company_name,
                location=(row.get("Location") or "").strip() or None,
                industry="Technology",
                about=f"{company_name} is hiring. View open positions and apply through VerifyHire.",
                website=website,
                verified=company_name not in _UNVERIFIED_COMPANIES,
                created_by_identifier=admin.identifier,
                created_date=datetime.now(timezone.utc),
            )
            db.add(company)
            seen_companies[company_name] = company

    db.commit()
    print(f"  OK {len(seen_companies)} companies")

    # ── Jobs ──
    job_records = []
    for row in rows:
        title = (row.get("Job Title") or "Untitled").strip()
        job_type_str = (row.get("Type of Job") or "Full-time").strip()
        company_name = (row.get("Company Name") or "Unknown").strip()
        location = (row.get("Location") or "").strip() or None
        salary = (row.get("Salary") or "").strip() or None
        description = (row.get("Job Description") or "").strip()
        requirement = (row.get("Job Requirement") or "").strip()
        website = (row.get("Company Website") or "").strip()
        apply_url = (row.get("Link to Apply") or "").strip() or None

        full_description = build_description(
            title, company_name, location, job_type_str,
            salary, description, requirement, website,
        )

        company = seen_companies[company_name]
        job = Job(
            identifier=uuid.uuid4(),
            title=title,
            company_identifier=company.identifier,
            location=location,
            job_type=parse_job_type(job_type_str),
            description=full_description,
            salary=salary,
            apply_url=apply_url,
            created_by_identifier=admin.identifier,
            created_date=datetime.now(timezone.utc),
        )
        job_records.append(job)

    db.add_all(job_records)
    db.commit()
    print(f"  OK {len(job_records)} jobs")

    db.close()

    # ── Summary ──
    print("\n" + "=" * 55)
    print("  🎉 DATABASE SEEDED WITH REAL JOBS!")
    print("=" * 55)
    for row in rows:
        print(f"  • {row['Job Title']} @ {row['Company Name']}")
    print("\nSign in at https://verify-hire-six.vercel.app/login")


if __name__ == "__main__":
    seed()
