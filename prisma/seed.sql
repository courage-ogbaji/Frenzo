-- Sample quiz data for local development.
-- Idempotent: fixed ids + INSERT OR IGNORE means re-running changes nothing.
-- Well-wisher names match src/data/wishes.ts so their portraits resolve.
-- Run with:  npx prisma db seed   (or:  sqlite3 ./prisma/dev.db ".read ./prisma/seed.sql")

-- Well-wishers ----------------------------------------------------------------
INSERT OR IGNORE INTO "User" ("id", "email", "name", "updatedAt") VALUES
  ('usr_godcolors', 'godcolors@wishers.frenzo', 'Godcolors', CURRENT_TIMESTAMP),
  ('usr_kairos',    'kairos@wishers.frenzo',    'Kairos',    CURRENT_TIMESTAMP),
  ('usr_miracle',   'miracle@wishers.frenzo',   'Miracle',   CURRENT_TIMESTAMP),
  ('usr_donald',    'donald@wishers.frenzo',    'Donald',    CURRENT_TIMESTAMP),
  ('usr_sarah',     'sarah@wishers.frenzo',     'Sarah',     CURRENT_TIMESTAMP),
  ('usr_betty',     'betty@wishers.frenzo',     'Betty',     CURRENT_TIMESTAMP);

-- Godcolors' quiz -------------------------------------------------------------
INSERT OR IGNORE INTO "Question" ("id", "text", "position", "userId", "updatedAt") VALUES
  ('q_gc_1', 'How does Godcolors most love to celebrate her birthday?', 1, 'usr_godcolors', CURRENT_TIMESTAMP),
  ('q_gc_2', 'Where did Godcolors''s most memorable road trip take place?', 2, 'usr_godcolors', CURRENT_TIMESTAMP),
  ('q_gc_3', 'What is Godcolors''s go-to comfort activity?', 3, 'usr_godcolors', CURRENT_TIMESTAMP);

INSERT OR IGNORE INTO "Option" ("id", "label", "text", "isCorrect", "questionId") VALUES
  ('o_gc_1_a', 'a', 'A quiet dinner at home',     0, 'q_gc_1'),
  ('o_gc_1_b', 'b', 'A surprise party',           0, 'q_gc_1'),
  ('o_gc_1_c', 'c', 'A spontaneous road trip',    1, 'q_gc_1'),
  ('o_gc_2_a', 'a', 'Obudu Mountain Resort',      1, 'q_gc_2'),
  ('o_gc_2_b', 'b', 'Lagos',                      0, 'q_gc_2'),
  ('o_gc_2_c', 'c', 'Abuja',                      0, 'q_gc_2'),
  ('o_gc_3_a', 'a', 'Late-night phone calls',     1, 'q_gc_3'),
  ('o_gc_3_b', 'b', 'Reading by the window',      0, 'q_gc_3'),
  ('o_gc_3_c', 'c', 'Long morning runs',          0, 'q_gc_3');

-- Kairos' quiz ----------------------------------------------------------------
INSERT OR IGNORE INTO "Question" ("id", "text", "position", "userId", "updatedAt") VALUES
  ('q_ka_1', 'Which word best describes Kairos to her friends?', 1, 'usr_kairos', CURRENT_TIMESTAMP),
  ('q_ka_2', 'What never goes unnoticed about Kairos?', 2, 'usr_kairos', CURRENT_TIMESTAMP);

INSERT OR IGNORE INTO "Option" ("id", "label", "text", "isCorrect", "questionId") VALUES
  ('o_ka_1_a', 'a', 'Reserved',          0, 'q_ka_1'),
  ('o_ka_1_b', 'b', 'Kind',              1, 'q_ka_1'),
  ('o_ka_1_c', 'c', 'Competitive',       0, 'q_ka_1'),
  ('o_ka_2_a', 'a', 'Her generosity',    1, 'q_ka_2'),
  ('o_ka_2_b', 'b', 'Her punctuality',   0, 'q_ka_2'),
  ('o_ka_2_c', 'c', 'Her playlists',     0, 'q_ka_2');

-- Betty's quiz ----------------------------------------------------------------
INSERT OR IGNORE INTO "Question" ("id", "text", "position", "userId", "updatedAt") VALUES
  ('q_be_1', 'In what year did Betty and her best friend first meet?', 1, 'usr_betty', CURRENT_TIMESTAMP),
  ('q_be_2', 'What did the road trip playlist mean to the group?', 2, 'usr_betty', CURRENT_TIMESTAMP);

INSERT OR IGNORE INTO "Option" ("id", "label", "text", "isCorrect", "questionId") VALUES
  ('o_be_1_a', 'a', '2018',                          0, 'q_be_1'),
  ('o_be_1_b', 'b', '2020',                          1, 'q_be_1'),
  ('o_be_1_c', 'c', '2022',                          0, 'q_be_1'),
  ('o_be_2_a', 'a', 'They knew every song by heart', 1, 'q_be_2'),
  ('o_be_2_b', 'b', 'Nobody could agree on it',      0, 'q_be_2'),
  ('o_be_2_c', 'c', 'It was played only once',       0, 'q_be_2');

  --Miracle's quiz ----------------------------------------------------------------
INSERT OR IGNORE INTO "Question" ("id", "text", "position", "userId", "updatedAt") VALUES
  ('q_mi_1', 'What is Miracle''s favorite way to unwind after a long day?', 1, 'usr_miracle', CURRENT_TIMESTAMP),
  ('q_mi_2', 'Which of these is Miracle''s go-to comfort food?', 2, 'usr_miracle', CURRENT_TIMESTAMP),
  ('q_mi_3', 'What is Miracle''s favorite genre of music?', 3, 'usr_miracle', CURRENT_TIMESTAMP),
  ('q_mi_4', 'Which of these is Miracle''s dream travel destination?', 4, 'usr_miracle', CURRENT_TIMESTAMP);

INSERT OR IGNORE INTO "Option" ("id", "label", "text", "isCorrect", "questionId") VALUES
  ('o_mi_1_a', 'a', 'Yoga and meditation',     0, 'q_mi_1'),
  ('o_mi_1_b', 'b', 'Binge-watching TV shows', 0, 'q_mi_1'),
  ('o_mi_1_c', 'c', 'Cooking new recipes',     1, 'q_mi_1'),
  ('o_mi_2_a', 'a', 'Pizza',                   0, 'q_mi_2'),
  ('o_mi_2_b', 'b', 'Sushi',                   1, 'q_mi_2'),
  ('o_mi_2_c', 'c', 'Ice cream',              0, 'q_mi_2'),
  ('o_mi_3_a', 'a', 'Pop music',              0, 'q_mi_3'),
  ('o_mi_3_b', 'b', 'Classical music',        0, 'q_mi_3'),
  ('o_mi_3_c', 'c', 'Indie rock',            1, 'q_mi_3'),
  ('o_mi_4_a', 'a', 'Paris, France',         0, 'q_mi_4'),
  ('o_mi_4_b', 'b', 'Kyoto, Japan',          1, 'q_mi_4'),
  ('o_mi_4_c', 'c', 'Cape Town, South Africa', 0, 'q_mi_4');

  -- Donald's quiz ----------------------------------------------------------------
INSERT OR IGNORE INTO "Question" ("id", "text", "position", "userId", "updatedAt") VALUES
  ('q_do_1', 'What is Donald''s favorite hobby?', 1, 'usr_donald', CURRENT_TIMESTAMP),
  ('q_do_2', 'Which of these is Donald''s go-to comfort food?', 2, 'usr_donald', CURRENT_TIMESTAMP),
  ('q_do_3', 'What is Donald''s favorite movie genre?', 3, 'usr_donald', CURRENT_TIMESTAMP),
  ('q_do_4', 'Which of these is Donald''s dream travel destination?', 4, 'usr_donald', CURRENT_TIMESTAMP),
  ('q_do_5', 'What is Donald''s favorite way to spend a weekend?', 5, 'usr_donald', CURRENT_TIMESTAMP);

  INSERT OR IGNORE INTO "Option" ("id", "label", "text", "isCorrect", "questionId") VALUES
  ('o_do_1_a', 'a', 'Playing video games',     1, 'q_do_1'),
  ('o_do_1_b', 'b', 'Gardening',              0, 'q_do_1'),
  ('o_do_1_c', 'c', 'Cooking',               0, 'q_do_1'),
  ('o_do_2_a', 'a', 'Burgers',               0, 'q_do_2'),
  ('o_do_2_b', 'b', 'Pasta',                 0, 'q_do_2'),
  ('o_do_2_c', 'c', 'Tacos',                 1, 'q_do_2'),
  ('o_do_3_a', 'a', 'Action movies',         0, 'q_do_3'),
  ('o_do_3_b', 'b', 'Comedies',             1, 'q_do_3'),
  ('o_do_3_c', 'c', 'Horror movies',        0, 'q_do_3'),
  ('o_do_4_a', 'a', 'New York City, USA',   0, 'q_do_4'),
  ('o_do_4_b', 'b', 'Rome, Italy',          0, 'q_do_4'),
  ('o_do_4_c', 'c', 'Barcelona, Spain',     1, 'q_do_4'),
  ('o_do_5_a', 'a', 'Hiking in nature',      0, 'q_do_5'),
  ('o_do_5_b', 'b', 'Attending concerts and events in the city.', 1, 'q_do_5'),
  ('o_do_5_c', 'c', 'Relaxing at home with a good book.', 0, 'q_do_5');

  -- Sarah's quiz ----------------------------------------------------------------
INSERT OR IGNORE INTO "Question" ("id", "text", "position", "userId", "updatedAt") VALUES
  ('q_sa_1', 'What is Sarah''s favorite way to unwind after a long day?', 1, 'usr_sarah', CURRENT_TIMESTAMP),
  ('q_sa_2', 'Which of these is Sarah''s go-to comfort food?', 2, 'usr_sarah', CURRENT_TIMESTAMP),
  ('q_sa_3', 'What is Sarah''s favorite genre of music?', 3, 'usr_sarah', CURRENT_TIMESTAMP),
  ('q_sa_4', 'Which of these is Sarah''s dream travel destination?', 4, 'usr_sarah', CURRENT_TIMESTAMP),
  ('q_sa_5', 'What is Sarah''s favorite way to spend a weekend?', 5, 'usr_sarah', CURRENT_TIMESTAMP);

  INSERT OR IGNORE INTO "Option" ("id", "label", "text", "isCorrect", "questionId") VALUES
  ('o_sa_1_a', 'a', 'Yoga and meditation',     1, 'q_sa_1'),
  ('o_sa_1_b', 'b', 'Binge-watching TV shows', 0, 'q_sa_1'),
  ('o_sa_1_c', 'c', 'Cooking new recipes',     0, 'q_sa_1'),
  ('o_sa_2_a', 'a', 'Pizza',                   0, 'q_sa_2'),
  ('o_sa_2_b', 'b', 'Sushi',                   0, 'q_sa_2'),
  ('o_sa_2_c', 'c', 'Ice cream',              1, 'q_sa_2'),
  ('o_sa_3_a', 'a', 'Pop music',              0, 'q_sa_3'),
  ('o_sa_3_b', 'b', 'Classical music',        1, 'q_sa_3'),
  ('o_sa_3_c', 'c', 'Indie rock',            0, 'q_sa_3'),
  ('o_sa_4_a', 'a', 'Paris, France',         0, 'q_sa_4'),
  ('o_sa_4_b', 'b', 'Kyoto, Japan',          0, 'q_sa_4'),
  ('o_sa_4_c', 'c', 'Cape Town, South Africa', 1, 'q_sa_4'),
  ('o_sa_5_a', 'a', 'Hiking in nature',      0, 'q_sa_5'),
  ('o_sa_5_b', 'b', 'Attending concerts and events in the city.', 0, 'q_sa_5'),
  ('o_sa_5_c', 'c', 'Relaxing at home with a good book.', 1, 'q_sa_5');