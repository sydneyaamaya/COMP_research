**Project Title**

Designing UI/UX to prevent the spread of miniformation 

## SQLite database

`database.sqlite` stores participant click totals, keyed by participant and the
JavaScript file used for the page variant. The schema is kept in `schema.sql`.

To initialize or recreate the database with Python's built-in SQLite support:

```powershell
python -c "import sqlite3; db = sqlite3.connect('database.sqlite'); db.executescript(open('schema.sql').read()); db.close()"
```

The database starts empty. Each `(participant_id, js_file)` pair can have one
non-negative `click_count`.
