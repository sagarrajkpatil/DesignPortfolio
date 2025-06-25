import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  category: text("category").notNull(),
  description: text("description"),
  image: text("image"),
  specifications: text("specifications"), // JSON string
  materials: text("materials"), // JSON string
  standards: text("standards"), // JSON string
});

export const categories = pgTable("categories", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  image: text("image"),
});

export const standards = pgTable("standards", {
  id: serial("id").primaryKey(),
  code: text("code").notNull(),
  description: text("description").notNull(),
  type: text("type").notNull(),
  equivalents: text("equivalents"), // JSON string
  dimensions: text("dimensions"), // JSON string
  diagram: text("diagram"),
});

export const blogPosts = pgTable("blog_posts", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  category: text("category").notNull(),
  author: text("author").notNull(),
  publishedAt: timestamp("published_at").notNull(),
  image: text("image"),
  excerpt: text("excerpt"),
});

export const datasheets = pgTable("datasheets", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  filename: text("filename").notNull(),
  category: text("category"),
});

export const insertProductSchema = createInsertSchema(products).omit({
  id: true,
});

export const insertCategorySchema = createInsertSchema(categories).omit({
  id: true,
});

export const insertStandardSchema = createInsertSchema(standards).omit({
  id: true,
});

export const insertBlogPostSchema = createInsertSchema(blogPosts).omit({
  id: true,
});

export const insertDatasheetSchema = createInsertSchema(datasheets).omit({
  id: true,
});

export type Product = typeof products.$inferSelect;
export type Category = typeof categories.$inferSelect;
export type Standard = typeof standards.$inferSelect;
export type BlogPost = typeof blogPosts.$inferSelect;
export type Datasheet = typeof datasheets.$inferSelect;

export type InsertProduct = z.infer<typeof insertProductSchema>;
export type InsertCategory = z.infer<typeof insertCategorySchema>;
export type InsertStandard = z.infer<typeof insertStandardSchema>;
export type InsertBlogPost = z.infer<typeof insertBlogPostSchema>;
export type InsertDatasheet = z.infer<typeof insertDatasheetSchema>;
