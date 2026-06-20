-- Sample quiz data for local development.
-- Idempotent: fixed ids + INSERT OR IGNORE means re-running changes nothing.
-- Well-wisher names match src/data/wishes.ts so their portraits resolve.
-- Run with:  npx prisma db seed   (or:  sqlite3 ./prisma/dev.db ".read ./prisma/seed.sql")

-- Well-wishers ----------------------------------------------------------------
INSERT OR IGNORE INTO "User" ("id", "email", "name", "updatedAt") VALUES
  ('usr_godcolors', 'godcolors@wishers.frenzo', 'Godcolors', CURRENT_TIMESTAMP),
  ('usr_kairos',    'kairos@wishers.frenzo',    'Kairos',    CURRENT_TIMESTAMP),
  ('usr_miracle',   'miracle@wishers.frenzo',   'Miracle',   CURRENT_TIMESTAMP),
  ('usr_ene',       'ene@wishers.frenzo',       'Ene',       CURRENT_TIMESTAMP),
  ('usr_sarah',     'sarah@wishers.frenzo',     'Sarah',     CURRENT_TIMESTAMP),
  ('usr_betty',     'betty@wishers.frenzo',     'Betty',     CURRENT_TIMESTAMP);

-- Godcolors' quiz -------------------------------------------------------------
INSERT OR IGNORE INTO "Question" ("id", "text", "position", "userId", "updatedAt") VALUES
  ('q_gc_1', 'How does Godcolors most love to celebrate his birthday?', 1, 'usr_godcolors', CURRENT_TIMESTAMP),
  ('q_gc_2', 'Where did Godcolors''s most memorable road trip take place?', 2, 'usr_godcolors', CURRENT_TIMESTAMP),
  ('q_gc_3', 'What is Godcolors''s go-to comfort activity?', 3, 'usr_godcolors', CURRENT_TIMESTAMP),
  ('q_gc_4', 'What is my position in the family?', 4, 'usr_godcolors', CURRENT_TIMESTAMP),
  ('q_gc_5', 'What is my tribal name?', 5, 'usr_godcolors', CURRENT_TIMESTAMP);

INSERT OR IGNORE INTO "Option" ("id", "label", "text", "isCorrect", "questionId") VALUES
  ('o_gc_1_a', 'a', 'A quiet time at home',     1, 'q_gc_1'),
  ('o_gc_1_b', 'b', 'A surprise party',           0, 'q_gc_1'),
  ('o_gc_1_c', 'c', 'A moment with friends',    0, 'q_gc_1'),
  ('o_gc_2_a', 'a', 'Obudu Mountain Resort',      0, 'q_gc_2'),
  ('o_gc_2_b', 'b', 'Eke',                      1, 'q_gc_2'),
  ('o_gc_2_c', 'c', 'Abuja',                      0, 'q_gc_2'),
  ('o_gc_3_a', 'a', 'Late-night meditations',     0, 'q_gc_3'),
  ('o_gc_3_b', 'b', 'Reading',      0, 'q_gc_3'),
  ('o_gc_3_c', 'c', 'Long stretch prayers',          1, 'q_gc_3'),
  ('o_gc_4_a', 'a', 'Fifth-born',          0, 'q_gc_4'),
  ('o_gc_4_b', 'b', 'seventh-born',        1, 'q_gc_4'),
  ('o_gc_4_c', 'c', 'Sixth-born',         0, 'q_gc_4'),
  ('o_gc_5_a', 'a', 'Idoko',              0, 'q_gc_5'),
  ('o_gc_5_b', 'b', 'I don''t have one',          1, 'q_gc_5'),
  ('o_gc_5_c', 'c', 'Onah',          0, 'q_gc_5');

-- Kairos' quiz ----------------------------------------------------------------
INSERT OR IGNORE INTO "Question" ("id", "text", "position", "userId", "updatedAt") VALUES
  ('q_ka_1', 'Which word best describes Kairos to her friends?', 1, 'usr_kairos', CURRENT_TIMESTAMP),
  ('q_ka_2', 'What never goes unnoticed about Kairos?', 2, 'usr_kairos', CURRENT_TIMESTAMP),
  ('q_ka_3', 'Which of these is Kairos''s favorite pastime?', 3, 'usr_kairos', CURRENT_TIMESTAMP),
  ('q_ka_4', 'Who is Kairos''s Vocal Note?', 4, 'usr_kairos', CURRENT_TIMESTAMP),
  ('q_ka_5', 'What is Kairos''s tribal name?', 5, 'usr_kairos', CURRENT_TIMESTAMP);


INSERT OR IGNORE INTO "Option" ("id", "label", "text", "isCorrect", "questionId") VALUES
  ('o_ka_1_a', 'a', 'Reserved',          0, 'q_ka_1'),
  ('o_ka_1_b', 'b', 'Kind',              1, 'q_ka_1'),
  ('o_ka_1_c', 'c', 'Competitive',       0, 'q_ka_1'),
  ('o_ka_2_a', 'a', 'Her generosity',    1, 'q_ka_2'),
  ('o_ka_2_b', 'b', 'Her punctuality',   0, 'q_ka_2'),
  ('o_ka_2_c', 'c', 'Her playlists',     0, 'q_ka_2'),
  ('o_ka_3_a', 'a', 'Cooking new recipes', 0, 'q_ka_3'),
  ('o_ka_3_b', 'b', 'Sleeping', 0, 'q_ka_3'),
  ('o_ka_3_c', 'c', 'Watching K-dramas',     1, 'q_ka_3'),
  ('o_ka_4_a', 'a', 'Soprano',         0, 'q_ka_4'),
  ('o_ka_4_b', 'b', 'Alto',          1, 'q_ka_4'),
  ('o_ka_4_c', 'c', 'Tenor', 0, 'q_ka_4'),
  ('o_ka_5_a', 'a', 'Iember',              0, 'q_ka_5'),
  ('o_ka_5_b', 'b', 'Iveren',        0, 'q_ka_5'),
  ('o_ka_5_c', 'c', 'Mlumun',            1, 'q_ka_5');

-- Betty's quiz ----------------------------------------------------------------
INSERT OR IGNORE INTO "Question" ("id", "text", "position", "userId", "updatedAt") VALUES
  ('q_be_1', 'What is Betty''s tribal name?', 1, 'usr_betty', CURRENT_TIMESTAMP),
  ('q_be_2', 'Which secondary school did I finish from?', 2, 'usr_betty', CURRENT_TIMESTAMP),
  ('q_be_3', 'What is Betty''s favorite food?', 3, 'usr_betty', CURRENT_TIMESTAMP),
  ('q_be_4', 'Which of these is Betty''s dream travel destination?', 4, 'usr_betty', CURRENT_TIMESTAMP),
  ('q_be_5', 'What is your favorite movie of all time?', 5, 'usr_betty', CURRENT_TIMESTAMP);

INSERT OR IGNORE INTO "Option" ("id", "label", "text", "isCorrect", "questionId") VALUES
  ('o_be_1_a', 'a', 'Iwueseter',                          0, 'q_be_1'),
  ('o_be_1_b', 'b', 'Kumaiwuese',                          1, 'q_be_1'),
  ('o_be_1_c', 'c', 'Iveren',                          0, 'q_be_1'),
  ('o_be_2_a', 'a', 'Federal Government Girls College Jalingo', 1, 'q_be_2'),
  ('o_be_2_b', 'b', 'Federal Science and Technical College Jalingo',      0, 'q_be_2'),
  ('o_be_2_c', 'c', 'Queen Amina College Jalingo',       0, 'q_be_2'),
  ('o_be_3_a', 'a', 'Pounded yam and egusi soup',        1, 'q_be_3'),
  ('o_be_3_b', 'b', 'Jollof rice and fried chicken',     0, 'q_be_3'),
  ('o_be_3_c', 'c', 'Fufu and vegetable soup',           0, 'q_be_3'),
  ('o_be_4_a', 'a', 'Paris',                     0, 'q_be_4'),
  ('o_be_4_b', 'b', 'Japan',                      0, 'q_be_4'),
  ('o_be_4_c', 'c', 'Malta',           1, 'q_be_4'),
  ('o_be_5_a', 'a', 'Like star''s on earth',         1, 'q_be_5'),
  ('o_be_5_b', 'b', 'The Godfather',                    0, 'q_be_5'),
  ('o_be_5_c', 'c', 'Pulp Fiction',                    0, 'q_be_5');

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

  -- Ene's quiz ----------------------------------------------------------------
INSERT OR IGNORE INTO "Question" ("id", "text", "position", "userId", "updatedAt") VALUES
  ('q_en_1', 'What is Ene''s favorite hobby?', 1, 'usr_ene', CURRENT_TIMESTAMP),
  ('q_en_2', 'Which of these is Ene''s go-to comfort food?', 2, 'usr_ene', CURRENT_TIMESTAMP),
  ('q_en_3', 'What is Ene''s favorite movie genre?', 3, 'usr_ene', CURRENT_TIMESTAMP),
  ('q_en_4', 'Which of these is Ene''s dream travel destination?', 4, 'usr_ene', CURRENT_TIMESTAMP),
  ('q_en_5', 'What is Ene''s favorite way to spend a weekend?', 5, 'usr_ene', CURRENT_TIMESTAMP);

  INSERT OR IGNORE INTO "Option" ("id", "label", "text", "isCorrect", "questionId") VALUES
  ('o_en_1_a', 'a', 'Playing video games',     1, 'q_en_1'),
  ('o_en_1_b', 'b', 'Gardening',              0, 'q_en_1'),
  ('o_en_1_c', 'c', 'Cooking',               0, 'q_en_1'),
  ('o_en_2_a', 'a', 'Burgers',               0, 'q_en_2'),
  ('o_en_2_b', 'b', 'Pasta',                 0, 'q_en_2'),
  ('o_en_2_c', 'c', 'Tacos',                 1, 'q_en_2'),
  ('o_en_3_a', 'a', 'Action movies',         0, 'q_en_3'),
  ('o_en_3_b', 'b', 'Comedies',             1, 'q_en_3'),
  ('o_en_3_c', 'c', 'Horror movies',        0, 'q_en_3'),
  ('o_en_4_a', 'a', 'New York City, USA',   0, 'q_en_4'),
  ('o_en_4_b', 'b', 'Rome, Italy',          0, 'q_en_4'),
  ('o_en_4_c', 'c', 'Barcelona, Spain',     1, 'q_en_4'),
  ('o_en_5_a', 'a', 'Hiking in nature',      0, 'q_en_5'),
  ('o_en_5_b', 'b', 'Attending concerts and events in the city.', 1, 'q_en_5'),
  ('o_en_5_c', 'c', 'Relaxing at home with a good book.', 0, 'q_en_5');

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