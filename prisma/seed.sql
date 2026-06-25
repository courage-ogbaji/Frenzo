-- Sample quiz data for local development.
-- Idempotent: fixed ids + ON CONFLICT DO NOTHING means re-running changes nothing.
-- Well-wisher names match src/data/wishes.ts so their portraits resolve.
-- Run with:  npx prisma db seed   (or:  npx prisma db execute --file ./prisma/seed.sql)

-- Well-wishers ----------------------------------------------------------------
INSERT INTO "User" ("id", "email", "name", "updatedAt") VALUES
  ('usr_godcolors', 'godcolors@wishers.frenzo', 'Godcolors', CURRENT_TIMESTAMP),
  ('usr_kairos',    'kairos@wishers.frenzo',    'Kairos',    CURRENT_TIMESTAMP),
  ('usr_miracle',   'miracle@wishers.frenzo',   'Miracle',   CURRENT_TIMESTAMP),
  ('usr_ene',       'ene@wishers.frenzo',       'Ene',       CURRENT_TIMESTAMP),
  ('usr_sarah',     'sarah@wishers.frenzo',     'Sarah',     CURRENT_TIMESTAMP),
  ('usr_betty',     'betty@wishers.frenzo',     'Betty',     CURRENT_TIMESTAMP)
ON CONFLICT DO NOTHING;

-- Godcolors' quiz -------------------------------------------------------------
INSERT INTO "Question" ("id", "text", "position", "userId", "updatedAt") VALUES
  ('q_gc_1', 'How does Godcolors most love to celebrate his birthday?', 1, 'usr_godcolors', CURRENT_TIMESTAMP),
  ('q_gc_2', 'Where did Godcolors''s most memorable road trip take place?', 2, 'usr_godcolors', CURRENT_TIMESTAMP),
  ('q_gc_3', 'What is Godcolors''s go-to comfort activity?', 3, 'usr_godcolors', CURRENT_TIMESTAMP),
  ('q_gc_4', 'What is my position in the family?', 4, 'usr_godcolors', CURRENT_TIMESTAMP),
  ('q_gc_5', 'What is my tribal name?', 5, 'usr_godcolors', CURRENT_TIMESTAMP)
ON CONFLICT DO NOTHING;

INSERT INTO "Option" ("id", "label", "text", "isCorrect", "questionId") VALUES
  ('o_gc_1_a', 'a', 'A quiet time at home',     true,  'q_gc_1'),
  ('o_gc_1_b', 'b', 'A surprise party',         false, 'q_gc_1'),
  ('o_gc_1_c', 'c', 'A moment with friends',    false, 'q_gc_1'),
  ('o_gc_2_a', 'a', 'Obudu Mountain Resort',    false, 'q_gc_2'),
  ('o_gc_2_b', 'b', 'Eke',                      true,  'q_gc_2'),
  ('o_gc_2_c', 'c', 'Abuja',                    false, 'q_gc_2'),
  ('o_gc_3_a', 'a', 'Late-night meditations',   false, 'q_gc_3'),
  ('o_gc_3_b', 'b', 'Reading',                  false, 'q_gc_3'),
  ('o_gc_3_c', 'c', 'Long stretch prayers',     true,  'q_gc_3'),
  ('o_gc_4_a', 'a', 'Fifth-born',               false, 'q_gc_4'),
  ('o_gc_4_b', 'b', 'seventh-born',             true,  'q_gc_4'),
  ('o_gc_4_c', 'c', 'Sixth-born',               false, 'q_gc_4'),
  ('o_gc_5_a', 'a', 'Idoko',                    false, 'q_gc_5'),
  ('o_gc_5_b', 'b', 'I don''t have one',        true,  'q_gc_5'),
  ('o_gc_5_c', 'c', 'Onah',                     false, 'q_gc_5')
ON CONFLICT DO NOTHING;

-- Kairos' quiz ----------------------------------------------------------------
INSERT INTO "Question" ("id", "text", "position", "userId", "updatedAt") VALUES
  ('q_ka_1', 'Which word best describes Kairos to her friends?', 1, 'usr_kairos', CURRENT_TIMESTAMP),
  ('q_ka_2', 'What never goes unnoticed about Kairos?', 2, 'usr_kairos', CURRENT_TIMESTAMP),
  ('q_ka_3', 'Which of these is Kairos''s favorite pastime?', 3, 'usr_kairos', CURRENT_TIMESTAMP),
  ('q_ka_4', 'What part does Kairos''s sing?', 4, 'usr_kairos', CURRENT_TIMESTAMP),
  ('q_ka_5', 'What is Kairos''s tribal name?', 5, 'usr_kairos', CURRENT_TIMESTAMP)
ON CONFLICT DO NOTHING;

INSERT INTO "Option" ("id", "label", "text", "isCorrect", "questionId") VALUES
  ('o_ka_1_a', 'a', 'Reserved',            false, 'q_ka_1'),
  ('o_ka_1_b', 'b', 'Troublesome',                true,  'q_ka_1'),
  ('o_ka_1_c', 'c', 'Competitive',         false, 'q_ka_1'),
  ('o_ka_2_a', 'a', 'Her fresh skin ',      true,  'q_ka_2'),
  ('o_ka_2_b', 'b', 'Her punctuality',     false, 'q_ka_2'),
  ('o_ka_2_c', 'c', 'Her playlists',       false, 'q_ka_2'),
  ('o_ka_3_a', 'a', 'Cooking new recipes', false, 'q_ka_3'),
  ('o_ka_3_b', 'b', 'Sleeping',            false, 'q_ka_3'),
  ('o_ka_3_c', 'c', 'Watching K-dramas',   true,  'q_ka_3'),
  ('o_ka_4_a', 'a', 'Soprano',             true, 'q_ka_4'),
  ('o_ka_4_b', 'b', 'Alto',                false,  'q_ka_4'),
  ('o_ka_4_c', 'c', 'Tenor',               false, 'q_ka_4'),
  ('o_ka_5_a', 'a', 'Iember',              false, 'q_ka_5'),
  ('o_ka_5_b', 'b', 'Iveren',              false, 'q_ka_5'),
  ('o_ka_5_c', 'c', 'Mlumun',              true,  'q_ka_5')
ON CONFLICT DO NOTHING;

-- Betty's quiz ----------------------------------------------------------------
INSERT INTO "Question" ("id", "text", "position", "userId", "updatedAt") VALUES
  ('q_be_1', 'What is Betty''s tribal name?', 1, 'usr_betty', CURRENT_TIMESTAMP),
  ('q_be_2', 'Which secondary school did I finish from?', 2, 'usr_betty', CURRENT_TIMESTAMP),
  ('q_be_3', 'What is Betty''s favorite food?', 3, 'usr_betty', CURRENT_TIMESTAMP),
  ('q_be_4', 'Which of these is Betty''s dream travel destination?', 4, 'usr_betty', CURRENT_TIMESTAMP),
  ('q_be_5', 'What is your favorite movie of all time?', 5, 'usr_betty', CURRENT_TIMESTAMP)
ON CONFLICT DO NOTHING;

INSERT INTO "Option" ("id", "label", "text", "isCorrect", "questionId") VALUES
  ('o_be_1_a', 'a', 'Iwueseter',                                       false, 'q_be_1'),
  ('o_be_1_b', 'b', 'Kumaiwuese',                                      true,  'q_be_1'),
  ('o_be_1_c', 'c', 'Iveren',                                          false, 'q_be_1'),
  ('o_be_2_a', 'a', 'Federal Government Girls College Jalingo',        true,  'q_be_2'),
  ('o_be_2_b', 'b', 'Federal Science and Technical College Jalingo',   false, 'q_be_2'),
  ('o_be_2_c', 'c', 'Queen Amina College Jalingo',                     false, 'q_be_2'),
  ('o_be_3_a', 'a', 'Pounded yam and egusi soup',                      true,  'q_be_3'),
  ('o_be_3_b', 'b', 'Jollof rice and fried chicken',                   false, 'q_be_3'),
  ('o_be_3_c', 'c', 'Fufu and vegetable soup',                         false, 'q_be_3'),
  ('o_be_4_a', 'a', 'Paris',                                           false, 'q_be_4'),
  ('o_be_4_b', 'b', 'Japan',                                           false, 'q_be_4'),
  ('o_be_4_c', 'c', 'Malta',                                           true,  'q_be_4'),
  ('o_be_5_a', 'a', 'Like star''s on earth',                           true,  'q_be_5'),
  ('o_be_5_b', 'b', 'The Godfather',                                   false, 'q_be_5'),
  ('o_be_5_c', 'c', 'Pulp Fiction',                                    false, 'q_be_5')
ON CONFLICT DO NOTHING;

-- Miracle's quiz --------------------------------------------------------------
INSERT INTO "Question" ("id", "text", "position", "userId", "updatedAt") VALUES
  ('q_mi_1', 'If I suddenly had 100 million naira, what would I do first?', 1, 'usr_miracle', CURRENT_TIMESTAMP),
  ('q_mi_2', 'What qualities do I value most in a friend?', 2, 'usr_miracle', CURRENT_TIMESTAMP),
  ('q_mi_3', 'What kind of career or future do I envision for myself?', 3, 'usr_miracle', CURRENT_TIMESTAMP),
  ('q_mi_4', 'What motivates me the most?', 4, 'usr_miracle', CURRENT_TIMESTAMP),
  ('q_mi_5', 'If you had to describe me in exactly three words, what would they be?', 5, 'usr_miracle', CURRENT_TIMESTAMP)
ON CONFLICT DO NOTHING;

INSERT INTO "Option" ("id", "label", "text", "isCorrect", "questionId") VALUES
  ('o_mi_1_a', 'a', 'Give mummy 20 million',       false, 'q_mi_1'),
  ('o_mi_1_b', 'b', 'Pay off debts',   false, 'q_mi_1'),
  ('o_mi_1_c', 'c', 'Pay tithe',       true,  'q_mi_1'),
  ('o_mi_2_a', 'a', 'Care',                     false, 'q_mi_2'),
  ('o_mi_2_b', 'b', 'Intriguing Attitude',                     true,  'q_mi_2'),
  ('o_mi_2_c', 'c', 'Self-esteem',                 false, 'q_mi_2'),
  ('o_mi_3_a', 'a', 'Crypto Investor',                 false, 'q_mi_3'),
  ('o_mi_3_b', 'b', 'Anime Creator',           false, 'q_mi_3'),
  ('o_mi_3_c', 'c', 'COE of a tech company',                true,  'q_mi_3'),
  ('o_mi_4_a', 'a', 'Money',             false, 'q_mi_4'),
  ('o_mi_4_b', 'b', 'Impact',              true,  'q_mi_4'),
  ('o_mi_4_c', 'c', 'Freedom',   false, 'q_mi_4'),
  ('o_mi_5_a', 'a', 'Caring, Honest, Sarcastic', true,  'q_mi_5'),
  ('o_mi_5_b', 'b', 'Hardworking, Smart, Handsome', false, 'q_mi_5'),
  ('o_mi_5_c', 'c', 'Caring, Bold, Soft', false, 'q_mi_5')
ON CONFLICT DO NOTHING;

-- Ene's quiz ------------------------------------------------------------------
INSERT INTO "Question" ("id", "text", "position", "userId", "updatedAt") VALUES
  ('q_en_1', 'What is Ene''s favorite hobby?', 1, 'usr_ene', CURRENT_TIMESTAMP),
  ('q_en_2', 'Which of these is Ene''s go-to comfort food?', 2, 'usr_ene', CURRENT_TIMESTAMP),
  ('q_en_3', 'What is Ene''s favorite Color?', 3, 'usr_ene', CURRENT_TIMESTAMP),
  ('q_en_4', 'Which of these is Ene''s dream travel destination?', 4, 'usr_ene', CURRENT_TIMESTAMP),
  ('q_en_5', 'What is Ene''s favorite way to spend a weekend?', 5, 'usr_ene', CURRENT_TIMESTAMP)
ON CONFLICT DO NOTHING;

INSERT INTO "Option" ("id", "label", "text", "isCorrect", "questionId") VALUES
  ('o_en_1_a', 'a', 'Sleeping',                       true,  'q_en_1'),
  ('o_en_1_b', 'b', 'Eating',                                 false, 'q_en_1'),
  ('o_en_1_c', 'c', 'Cooking',                                   false, 'q_en_1'),
  ('o_en_2_a', 'a', 'Rice',                                   false, 'q_en_2'),
  ('o_en_2_b', 'b', 'Pasta',                                     true, 'q_en_2'),
  ('o_en_2_c', 'c', 'Beans',                                     false,  'q_en_2'),
  ('o_en_3_a', 'a', 'Red',                             false, 'q_en_3'),
  ('o_en_3_b', 'b', 'Purple',                                  true,  'q_en_3'),
  ('o_en_3_c', 'c', 'Green',                             false, 'q_en_3'),
  ('o_en_4_a', 'a', 'New York City',                        false, 'q_en_4'),
  ('o_en_4_b', 'b', 'Rome',                               false, 'q_en_4'),
  ('o_en_4_c', 'c', 'Mauritius',                          true,  'q_en_4'),
  ('o_en_5_a', 'a', 'Cleaning',                          false, 'q_en_5'),
  ('o_en_5_b', 'b', 'Attending concerts and events in the city.', false,  'q_en_5'),
  ('o_en_5_c', 'c', 'Relaxing at home with a good food.',        true, 'q_en_5')
ON CONFLICT DO NOTHING;

-- Sarah's quiz ----------------------------------------------------------------
INSERT INTO "Question" ("id", "text", "position", "userId", "updatedAt") VALUES
  ('q_sa_1', 'What is Sarah''s favorite way to unwind after a long day?', 1, 'usr_sarah', CURRENT_TIMESTAMP),
  ('q_sa_2', 'Which of these is Sarah''s go-to comfort food?', 2, 'usr_sarah', CURRENT_TIMESTAMP),
  ('q_sa_3', 'What is Sarah''s favorite genre of music?', 3, 'usr_sarah', CURRENT_TIMESTAMP),
  ('q_sa_4', 'Which of these is Sarah''s dream Job?', 4, 'usr_sarah', CURRENT_TIMESTAMP),
  ('q_sa_5', 'What is Sarah''s favorite way to spend a weekend?', 5, 'usr_sarah', CURRENT_TIMESTAMP)
ON CONFLICT DO NOTHING;

INSERT INTO "Option" ("id", "label", "text", "isCorrect", "questionId") VALUES
  ('o_sa_1_a', 'a', 'Meditation',                       false,  'q_sa_1'),
  ('o_sa_1_b', 'b', 'Binge-watching TV shows',                   true, 'q_sa_1'),
  ('o_sa_1_c', 'c', 'Cooking new recipes',                       false, 'q_sa_1'),
  ('o_sa_2_a', 'a', 'Beans',                                     false, 'q_sa_2'),
  ('o_sa_2_b', 'b', 'Rice and Stew',                                     false, 'q_sa_2'),
  ('o_sa_2_c', 'c', 'Vegetable soup and Akpu',                                 true,  'q_sa_2'),
  ('o_sa_3_a', 'a', 'Pop music',                                 false, 'q_sa_3'),
  ('o_sa_3_b', 'b', 'Classical music',                           true,  'q_sa_3'),
  ('o_sa_3_c', 'c', 'Indie rock',                                false, 'q_sa_3'),
  ('o_sa_4_a', 'a', 'Own a hospital',                             false, 'q_sa_4'),
  ('o_sa_4_b', 'b', 'Own a restaurant',                              true, 'q_sa_4'),
  ('o_sa_4_c', 'c', 'Own a clothing store',                   false,  'q_sa_4'),
  ('o_sa_5_a', 'a', 'Reading books',                          false, 'q_sa_5'),
  ('o_sa_5_b', 'b', 'Visiting friends', false, 'q_sa_5'),
  ('o_sa_5_c', 'c', 'Relaxing at home watching reels.',        true,  'q_sa_5')
ON CONFLICT DO NOTHING;
