import os
from sqlalchemy import create_engine, text
from dotenv import load_dotenv

load_dotenv()
e = create_engine(os.getenv("DATABASE_URL"))
with e.connect() as c:
    jobs = c.execute(text("select count(*) from jobs")).scalar()
    comps = c.execute(text("select count(*) from companies")).scalar()
    users = c.execute(text("select count(*) from users")).scalar()
    with_salary = c.execute(text("select count(*) from jobs where salary is not null and salary <> ''")).scalar()
    with_url = c.execute(text("select count(*) from jobs where apply_url is not null and apply_url <> ''")).scalar()
    print(f"JOBS: {jobs}")
    print(f"COMPANIES: {comps}")
    print(f"USERS: {users}")
    print(f"JOBS_WITH_SALARY: {with_salary}")
    print(f"JOBS_WITH_APPLY_URL: {with_url}")
    print("--- sample ---")
    for r in c.execute(text("select title, salary, apply_url from jobs order by title limit 5")).fetchall():
        print(" | ".join(str(x) for x in r))
