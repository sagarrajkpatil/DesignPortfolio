import { 
  Product, 
  Category, 
  Standard, 
  BlogPost, 
  Datasheet,
  InsertProduct,
  InsertCategory,
  InsertStandard,
  InsertBlogPost,
  InsertDatasheet
} from "@shared/schema";
import productsData from "./data/products.json";
import standardsData from "./data/standards.json";
import blogData from "./data/blog.json";
import datasheetsData from "./data/datasheets.json";

export interface IStorage {
  // Products
  getProducts(): Promise<Product[]>;
  getProductsByCategory(category: string): Promise<Product[]>;
  getProduct(id: number): Promise<Product | undefined>;
  
  // Categories
  getCategories(): Promise<Category[]>;
  getCategory(id: number): Promise<Category | undefined>;
  
  // Standards
  getStandards(filters?: { type?: string; search?: string }): Promise<Standard[]>;
  getStandard(id: number): Promise<Standard | undefined>;
  getStandardByCode(code: string): Promise<Standard | undefined>;
  
  // Blog
  getBlogPosts(category?: string): Promise<BlogPost[]>;
  getBlogPost(id: number): Promise<BlogPost | undefined>;
  
  // Datasheets
  getDatasheets(search?: string): Promise<Datasheet[]>;
  getDatasheet(id: number): Promise<Datasheet | undefined>;
}

export class MemStorage implements IStorage {
  private products: Product[] = [];
  private categories: Category[] = [];
  private standards: Standard[] = [];
  private blogPosts: BlogPost[] = [];
  private datasheets: Datasheet[] = [];

  constructor() {
    this.loadData();
  }

  private loadData() {
    // Load products
    this.products = productsData.products.map(p => ({
      ...p,
      specifications: p.specifications || "{}",
      materials: p.materials || "[]",
      standards: p.standards || "[]"
    }));

    // Load categories
    this.categories = productsData.categories;

    // Load standards
    this.standards = standardsData.standards.map(s => ({
      ...s,
      equivalents: s.equivalents || "[]",
      dimensions: s.dimensions || "[]",
      diagram: s.diagram || ""
    }));

    // Load blog posts
    this.blogPosts = blogData.posts.map(p => ({
      ...p,
      publishedAt: new Date(p.publishedAt)
    }));

    // Load datasheets
    this.datasheets = datasheetsData.datasheets;
  }

  async getProducts(): Promise<Product[]> {
    return this.products;
  }

  async getProductsByCategory(category: string): Promise<Product[]> {
    return this.products.filter(p => p.category.toLowerCase() === category.toLowerCase());
  }

  async getProduct(id: number): Promise<Product | undefined> {
    return this.products.find(p => p.id === id);
  }

  async getCategories(): Promise<Category[]> {
    return this.categories;
  }

  async getCategory(id: number): Promise<Category | undefined> {
    return this.categories.find(c => c.id === id);
  }

  async getStandards(filters?: { type?: string; search?: string }): Promise<Standard[]> {
    let filtered = this.standards;

    if (filters?.type) {
      filtered = filtered.filter(s => s.type.toLowerCase() === filters.type!.toLowerCase());
    }

    if (filters?.search) {
      const search = filters.search.toLowerCase();
      filtered = filtered.filter(s => 
        s.code.toLowerCase().includes(search) || 
        s.description.toLowerCase().includes(search)
      );
    }

    return filtered;
  }

  async getStandard(id: number): Promise<Standard | undefined> {
    return this.standards.find(s => s.id === id);
  }

  async getStandardByCode(code: string): Promise<Standard | undefined> {
    return this.standards.find(s => s.code.toLowerCase() === code.toLowerCase());
  }

  async getBlogPosts(category?: string): Promise<BlogPost[]> {
    if (category) {
      return this.blogPosts.filter(p => p.category.toLowerCase() === category.toLowerCase());
    }
    return this.blogPosts;
  }

  async getBlogPost(id: number): Promise<BlogPost | undefined> {
    return this.blogPosts.find(p => p.id === id);
  }

  async getDatasheets(search?: string): Promise<Datasheet[]> {
    if (search) {
      const searchLower = search.toLowerCase();
      return this.datasheets.filter(d => 
        d.name.toLowerCase().includes(searchLower) ||
        (d.category && d.category.toLowerCase().includes(searchLower))
      );
    }
    return this.datasheets;
  }

  async getDatasheet(id: number): Promise<Datasheet | undefined> {
    return this.datasheets.find(d => d.id === id);
  }
}

export const storage = new MemStorage();
