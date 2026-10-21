CREATE TABLE IF NOT EXISTS participant_clicks (
	participant_id TEXT NOT NULL,
	js_file TEXT NOT NULL,
	click_count INTEGER NOT NULL DEFAULT 0 CHECK (click_count >= 0),
	PRIMARY KEY (participant_id, js_file)
) WITHOUT ROWID;
