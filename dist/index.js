// server/index.ts
import express2 from "express";

// server/routes.ts
import { createServer } from "http";

// server/data/products.json
var products_default = {
  categories: [
    {
      id: 1,
      name: "Bolts",
      description: "Hex bolts, stud bolts, anchor bolts and specialized fasteners",
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
    },
    {
      id: 2,
      name: "Screws",
      description: "Socket head screws, machine screws and specialty screws",
      image: "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
    },
    {
      id: 3,
      name: "Nuts",
      description: "Hex nuts, lock nuts and specialty nut configurations",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
    },
    {
      id: 4,
      name: "Washers",
      description: "Plain washers, spring washers and custom washer solutions",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
    }
  ],
  products: [
    {
      id: 1,
      name: "Hex Bolts",
      category: "Bolts",
      description: "Standard hexagon head bolts for general applications",
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=150",
      specifications: '{"forming": "Hot, Cold Forged & Machined", "metric_size": "M6 to M100", "imperial_size": "1/4 to 4 inch", "threads": "UNC, UNF, ISO, BSW & ACME", "standards": "ASME,BS,DIN,ISO,UNI,DIN-EN"}',
      materials: '["Carbon Steel", "Alloy Steel", "Stainless Steel", "Duplex Stainless Steel"]',
      standards: '["ASME B18.2.1", "DIN 931", "ISO 4014"]'
    },
    {
      id: 2,
      name: "Heavy Hex Bolts",
      category: "Bolts",
      description: 'Heavy hex bolts are heavy profile hexagon head bolts with full and partial thread configurations. Heavy hex bolts are coupled with heavy hex nuts and heavy washers to complete the bolting assembly. Heavy hex bolts are produced in both metric and imperial sizes with imperial coarse, fine, extra fine, fixed, BSW, BSF, metric coarse, fine and extra fine threads. Heavy hex bolts are manufactured from M12 up-to M36 in metric system and from 3/8" to 3" in imperial system and can be further customized up to 8" or M180.\n\nBoltPort is a manufacturer of heavy hex bolts in variety of metals and alloys across ASTM, ASME, ISO, DIN, BS, EN, SAE and Indian material specifications. We can produce these heavy hex bolts to ASME, DIN, ISO, BS, UNI, CSN, PN, EU and IFI dimensional standards.',
      image: "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=150",
      specifications: '{"forming": "Hot & Cold Forged", "metric_size": "M10 to M100", "imperial_size": "3/8 to 8 inch", "threads": "UNC, UNF, ISO, BSW & ACME", "standards": "ASME,BS,DIN,ISO,UNI,DIN-EN", "sub_types": ["1. Fully Threaded Heavy Hex Bolts", "2. Partial Threaded Heavy Hex Bolts", "3. Metric Heavy Hex Bolts", "4. Imperial Heavy Hex Bolts"]}',
      materials: '["Carbon Steel", "Aluminum", "Nickel", "Monel", "Molybdenum", "Brass", "Manganese Bronze", "Stellite", "Alloy Steel", "Titanium", "Tantalum", "Hastelloy", "Copper Nickel", "Aluminum Bronze", "Tin Bronze", "Waspaloy", "Stainless Steel", "Copper", "Zirconium", "Incoloy", "Nickel Silver", "Silicon Bronze", "Nickel Aluminium Bronze", "Maraging", "Duplex Stainless Steel", "Super Duplex Steel", "Inconel", "Nimonic", "Beryllium Copper", "Phosphor Bronze", "Silicon Aluminium Bronze", "Tool Steel"]',
      standards: '["ASME B18.2.1", "BS 1769", "ASME B18.2.3.6M", "UNI 5712", "DIN-EN 14399-4"]'
    },
    {
      id: 3,
      name: "Hollow Hex Bolts",
      category: "Bolts",
      description: "Hollow hex bolts for specialized applications",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=150",
      specifications: "{}",
      materials: "[]",
      standards: "[]"
    },
    {
      id: 4,
      name: "Hollow Allen",
      category: "Bolts",
      description: "Allen bolts with hexagonal socket",
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=150",
      specifications: "{}",
      materials: "[]",
      standards: "[]"
    },
    {
      id: 5,
      name: "Machine Bolts",
      category: "Bolts",
      description: "Machine bolts with standard threading",
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=150",
      specifications: "{}",
      materials: "[]",
      standards: "[]"
    },
    {
      id: 6,
      name: "Socket Head Bolts",
      category: "Bolts",
      description: "Socket head bolts for precision applications",
      image: "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=150",
      specifications: "{}",
      materials: "[]",
      standards: "[]"
    },
    {
      id: 7,
      name: "Hex Flange Bolts",
      category: "Bolts",
      description: "Flange bolts with integrated washer",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=150",
      specifications: "{}",
      materials: "[]",
      standards: "[]"
    },
    {
      id: 8,
      name: "Eye Bolts",
      category: "Bolts",
      description: "Eye bolts with circular lifting end",
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=150",
      specifications: "{}",
      materials: "[]",
      standards: "[]"
    },
    {
      id: 9,
      name: "Lag Bolts",
      category: "Bolts",
      description: "Lag bolts for wood applications",
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=150",
      specifications: "{}",
      materials: "[]",
      standards: "[]"
    },
    {
      id: 10,
      name: "Ball Lock Bolts",
      category: "Bolts",
      description: "Ball lock bolts with spring mechanism",
      image: "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=150",
      specifications: "{}",
      materials: "[]",
      standards: "[]"
    }
  ]
};

// server/data/standards.json
var standards_default = {
  standards: [
    {
      id: 1,
      code: "DIN 1",
      description: "Taper Pins",
      type: "DIN",
      equivalents: '["ISO 2339", "CSN 22153", "PN 85020", "UNI 7283", "EU 22339"]',
      dimensions: '[{"d1": 2, "cmax": 0.3, "r": 2}, {"d1": 3, "cmax": 0.45, "r": 3}, {"d1": 4, "cmax": 0.6, "r": 4}, {"d1": 5, "cmax": 0.75, "r": 5}, {"d1": 6, "cmax": 0.9, "r": 6}, {"d1": 8, "cmax": 1.2, "r": 8}, {"d1": 10, "cmax": 1.5, "r": 10}, {"d1": 12, "cmax": 1.8, "r": 12}, {"d1": 16, "cmax": 2.5, "r": 16}]',
      diagram: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    },
    {
      id: 2,
      code: "DIN 7",
      description: "Dowel Pins",
      type: "DIN",
      equivalents: "[]",
      dimensions: "[]",
      diagram: ""
    },
    {
      id: 3,
      code: "DIN 39",
      description: "Handles fixed",
      type: "DIN",
      equivalents: "[]",
      dimensions: "[]",
      diagram: ""
    },
    {
      id: 4,
      code: "DIN 84",
      description: "Slotted cheese head screws",
      type: "DIN",
      equivalents: "[]",
      dimensions: "[]",
      diagram: ""
    },
    {
      id: 5,
      code: "DIN 85",
      description: "Slotted pan head screws",
      type: "DIN",
      equivalents: "[]",
      dimensions: "[]",
      diagram: ""
    },
    {
      id: 6,
      code: "DIN 93",
      description: "Slices with a cloth (lock washers)",
      type: "DIN",
      equivalents: "[]",
      dimensions: "[]",
      diagram: ""
    },
    {
      id: 7,
      code: "DIN 94",
      description: "Split pins",
      type: "DIN",
      equivalents: "[]",
      dimensions: "[]",
      diagram: ""
    },
    {
      id: 8,
      code: "DIN 95",
      description: "Slotted oval head wood screws",
      type: "DIN",
      equivalents: "[]",
      dimensions: "[]",
      diagram: ""
    },
    {
      id: 9,
      code: "DIN 96",
      description: "Slotted Round Head Wood Screws",
      type: "DIN",
      equivalents: "[]",
      dimensions: "[]",
      diagram: ""
    },
    {
      id: 10,
      code: "DIN 97",
      description: "Slotted Flat Head Wood Screws",
      type: "DIN",
      equivalents: "[]",
      dimensions: "[]",
      diagram: ""
    },
    {
      id: 11,
      code: "DIN 98",
      description: "Handles, rotatable",
      type: "DIN",
      equivalents: "[]",
      dimensions: "[]",
      diagram: ""
    },
    {
      id: 12,
      code: "DIN 99",
      description: "Clamping Levers",
      type: "DIN",
      equivalents: "[]",
      dimensions: "[]",
      diagram: ""
    },
    {
      id: 13,
      code: "DIN 124",
      description: "Round Head Rivets",
      type: "DIN",
      equivalents: "[]",
      dimensions: "[]",
      diagram: ""
    },
    {
      id: 14,
      code: "DIN 125",
      description: "Plain Washers",
      type: "DIN",
      equivalents: "[]",
      dimensions: "[]",
      diagram: ""
    },
    {
      id: 15,
      code: "DIN 125 A",
      description: "Plain washers Type A",
      type: "DIN",
      equivalents: "[]",
      dimensions: "[]",
      diagram: ""
    }
  ]
};

// server/data/blog.json
var blog_default = {
  posts: [
    {
      id: 1,
      title: "Types of Stud Bolts / Studs",
      content: 'Stud Bolts are externally threaded fasteners without a head, used with 2 nuts on either side, substituting a usual "bolt & nut" assembly. Stud bolts are prominently used in flange connections.\n\nDepending upon their design and threading patterns, there are different types of stud bolts as below:\n\n## Continuous Threaded Stud Bolts (Fully Threaded Studs without Chamfered Ends)\n\nStud Bolts with uniform threads over the length are termed as continuous thread stud bolts. This type usually does not carry a chamfered end.\n\n## Tap End Stud Bolts\n\nStud Bolts with unequal length of threads at extreme ends with non-threaded center.\n\n## Double End Stud Bolts\n\nStud Bolts with equal thread lengths at either end with non-threaded center.\n\n## Flange Stud Bolts (Fully Threaded Studs with Chamfered Ends)\n\nThis category stands exclusive for studs bolts used in flange connection with continuous thread over the length and chamfered ends.\n\n## Welding Studs\n\nUnlike others, these are welding studs used with nut on one side and welded to the support on the other.',
      category: "STUD BOLTS",
      author: "Santosh Mehta",
      publishedAt: "2018-05-03T18:00:00Z",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      excerpt: 'Stud Bolts are externally threaded fasteners without a head, used with 2 nuts on either side, substituting a usual "bolt & nut" assembly. Stud bolts are prominently used in flange connections.'
    },
    {
      id: 2,
      title: "List of Washers Dimension Standards",
      content: "List of different dimension standards associated with all types of imperial, metric plain / flat and lock washers, designed and published by Organisations such as DIN, ISO, UNI, ASME, BS and BIS.\n\n## DIN Standards\n- DIN 125: Plain washers\n- DIN 127: Spring lock washers\n- DIN 6796: Disc springs\n\n## ISO Standards\n- ISO 7089: Plain washers, normal series\n- ISO 7090: Plain washers, fine pitch series\n- ISO 7091: Plain washers, coarse series\n\n## ASME Standards\n- ASME B18.21.1: Lock washers\n- ASME B18.22.1: Plain washers",
      category: "WASHERS",
      author: "Technical Team",
      publishedAt: "2018-05-04T12:00:00Z",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
      excerpt: "List of different dimension standards associated with all types of imperial, metric plain / flat and lock washers, designed and published by Organisations such as DIN, ISO, UNI, ASME, BS and BIS."
    }
  ]
};

// server/data/datasheets.json
var datasheets_default = {
  datasheets: [
    { id: 1, name: "ASME SA193 Grade B5", filename: "asme-sa193-b5.pdf", category: "ASME" },
    { id: 2, name: "ASME SA193 Grade B6", filename: "asme-sa193-b6.pdf", category: "ASME" },
    { id: 3, name: "ASME SA193 Grade B16", filename: "asme-sa193-b16.pdf", category: "ASME" },
    { id: 4, name: "ASME SA194 Grade 3", filename: "asme-sa194-3.pdf", category: "ASME" },
    { id: 5, name: "ASME SA194 Grade 7", filename: "asme-sa194-7.pdf", category: "ASME" },
    { id: 6, name: "ASME SA38F Grade 11", filename: "asme-sa38f-11.pdf", category: "ASME" },
    { id: 7, name: "ASTM A193 Grade B6", filename: "astm-a193-b6.pdf", category: "ASTM" },
    { id: 8, name: "ASTM A193 Grade B7", filename: "astm-a193-b7.pdf", category: "ASTM" },
    { id: 9, name: "ASTM A193 Grade B16", filename: "astm-a193-b16.pdf", category: "ASTM" },
    { id: 10, name: "ASTM A194 Grade 2H", filename: "astm-a194-2h.pdf", category: "ASTM" },
    { id: 11, name: "ASTM A194 Grade 2HM", filename: "astm-a194-2hm.pdf", category: "ASTM" },
    { id: 12, name: "ASTM A194 Grade 4", filename: "astm-a194-4.pdf", category: "ASTM" },
    { id: 13, name: "ASTM A194 Grade 7", filename: "astm-a194-7.pdf", category: "ASTM" },
    { id: 14, name: "ASTM A194 Grade 8", filename: "astm-a194-8.pdf", category: "ASTM" }
  ]
};

// server/storage.ts
var MemStorage = class {
  products = [];
  categories = [];
  standards = [];
  blogPosts = [];
  datasheets = [];
  constructor() {
    this.loadData();
  }
  loadData() {
    this.products = products_default.products.map((p) => ({
      ...p,
      specifications: p.specifications || "{}",
      materials: p.materials || "[]",
      standards: p.standards || "[]"
    }));
    this.categories = products_default.categories;
    this.standards = standards_default.standards.map((s) => ({
      ...s,
      equivalents: s.equivalents || "[]",
      dimensions: s.dimensions || "[]",
      diagram: s.diagram || ""
    }));
    this.blogPosts = blog_default.posts.map((p) => ({
      ...p,
      publishedAt: new Date(p.publishedAt)
    }));
    this.datasheets = datasheets_default.datasheets;
  }
  async getProducts() {
    return this.products;
  }
  async getProductsByCategory(category) {
    return this.products.filter((p) => p.category.toLowerCase() === category.toLowerCase());
  }
  async getProduct(id) {
    return this.products.find((p) => p.id === id);
  }
  async getCategories() {
    return this.categories;
  }
  async getCategory(id) {
    return this.categories.find((c) => c.id === id);
  }
  async getStandards(filters) {
    let filtered = this.standards;
    if (filters?.type) {
      filtered = filtered.filter((s) => s.type.toLowerCase() === filters.type.toLowerCase());
    }
    if (filters?.search) {
      const search = filters.search.toLowerCase();
      filtered = filtered.filter(
        (s) => s.code.toLowerCase().includes(search) || s.description.toLowerCase().includes(search)
      );
    }
    return filtered;
  }
  async getStandard(id) {
    return this.standards.find((s) => s.id === id);
  }
  async getStandardByCode(code) {
    return this.standards.find((s) => s.code.toLowerCase() === code.toLowerCase());
  }
  async getBlogPosts(category) {
    if (category) {
      return this.blogPosts.filter((p) => p.category.toLowerCase() === category.toLowerCase());
    }
    return this.blogPosts;
  }
  async getBlogPost(id) {
    return this.blogPosts.find((p) => p.id === id);
  }
  async getDatasheets(search) {
    if (search) {
      const searchLower = search.toLowerCase();
      return this.datasheets.filter(
        (d) => d.name.toLowerCase().includes(searchLower) || d.category && d.category.toLowerCase().includes(searchLower)
      );
    }
    return this.datasheets;
  }
  async getDatasheet(id) {
    return this.datasheets.find((d) => d.id === id);
  }
};
var storage = new MemStorage();

// server/routes.ts
async function registerRoutes(app2) {
  app2.get("/api/products", async (req, res) => {
    try {
      const { category } = req.query;
      let products;
      if (category) {
        products = await storage.getProductsByCategory(category);
      } else {
        products = await storage.getProducts();
      }
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch products" });
    }
  });
  app2.get("/api/products/:id", async (req, res) => {
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
  app2.get("/api/categories", async (req, res) => {
    try {
      const categories = await storage.getCategories();
      res.json(categories);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch categories" });
    }
  });
  app2.get("/api/standards", async (req, res) => {
    try {
      const { type, search } = req.query;
      const standards = await storage.getStandards({
        type,
        search
      });
      res.json(standards);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch standards" });
    }
  });
  app2.get("/api/standards/:id", async (req, res) => {
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
  app2.get("/api/standards/code/:code", async (req, res) => {
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
  app2.get("/api/blog", async (req, res) => {
    try {
      const { category } = req.query;
      const posts = await storage.getBlogPosts(category);
      res.json(posts);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch blog posts" });
    }
  });
  app2.get("/api/blog/:id", async (req, res) => {
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
  app2.get("/api/datasheets", async (req, res) => {
    try {
      const { search } = req.query;
      const datasheets = await storage.getDatasheets(search);
      res.json(datasheets);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch datasheets" });
    }
  });
  app2.get("/api/datasheets/:id/download", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const datasheet = await storage.getDatasheet(id);
      if (!datasheet) {
        return res.status(404).json({ error: "Datasheet not found" });
      }
      res.json({ message: "Download initiated", filename: datasheet.filename });
    } catch (error) {
      res.status(500).json({ error: "Failed to download datasheet" });
    }
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs from "fs";
import path2 from "path";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets")
    }
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"]
    }
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}

// server/index.ts
var app = express2();
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const start = Date.now();
  const path3 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path3.startsWith("/api")) {
      let logLine = `${req.method} ${path3} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = process.env.PORT || 3003;
  server.listen({
    port: +port,
    // host: "0.0.0.0",
    reusePort: true
  }, () => {
    log(`Server running on http://localhost:${port}`);
  });
})();
