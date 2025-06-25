import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Products API
  app.get("/api/products", async (req, res) => {
    try {
      const { category } = req.query;
      let products;
      
      if (category) {
        products = await storage.getProductsByCategory(category as string);
      } else {
        products = await storage.getProducts();
      }
      
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch products" });
    }
  });

  app.get("/api/products/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const product = await storage.getProduct(id);
      
      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }
      
      res.json(product);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch product" });
    }
  });

  // Categories API
  app.get("/api/categories", async (req, res) => {
    try {
      const categories = await storage.getCategories();
      res.json(categories);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch categories" });
    }
  });

  // Standards API
  app.get("/api/standards", async (req, res) => {
    try {
      const { type, search } = req.query;
      const standards = await storage.getStandards({
        type: type as string,
        search: search as string
      });
      res.json(standards);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch standards" });
    }
  });

  app.get("/api/standards/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const standard = await storage.getStandard(id);
      
      if (!standard) {
        return res.status(404).json({ error: "Standard not found" });
      }
      
      res.json(standard);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch standard" });
    }
  });

  app.get("/api/standards/code/:code", async (req, res) => {
    try {
      const code = req.params.code;
      const standard = await storage.getStandardByCode(code);
      
      if (!standard) {
        return res.status(404).json({ error: "Standard not found" });
      }
      
      res.json(standard);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch standard" });
    }
  });

  // Blog API
  app.get("/api/blog", async (req, res) => {
    try {
      const { category } = req.query;
      const posts = await storage.getBlogPosts(category as string);
      res.json(posts);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch blog posts" });
    }
  });

  app.get("/api/blog/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const post = await storage.getBlogPost(id);
      
      if (!post) {
        return res.status(404).json({ error: "Blog post not found" });
      }
      
      res.json(post);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch blog post" });
    }
  });

  // Datasheets API
  app.get("/api/datasheets", async (req, res) => {
    try {
      const { search } = req.query;
      const datasheets = await storage.getDatasheets(search as string);
      res.json(datasheets);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch datasheets" });
    }
  });

  app.get("/api/datasheets/:id/download", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const datasheet = await storage.getDatasheet(id);
      
      if (!datasheet) {
        return res.status(404).json({ error: "Datasheet not found" });
      }
      
      // In a real application, this would serve the actual PDF file
      res.json({ message: "Download initiated", filename: datasheet.filename });
    } catch (error) {
      res.status(500).json({ error: "Failed to download datasheet" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
