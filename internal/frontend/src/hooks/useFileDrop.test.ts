import { describe, it, expect } from "vitest";
import { isMarkdownFile } from "../utils/filetype";

describe("isMarkdownFile (re-exported via useFileDrop)", () => {
  it("accepts .md files", () => {
    expect(isMarkdownFile("readme.md")).toBe(true);
  });

  it("accepts .markdown files", () => {
    expect(isMarkdownFile("doc.markdown")).toBe(true);
  });

  it("accepts .mdx files", () => {
    expect(isMarkdownFile("page.mdx")).toBe(true);
  });

  it("is case insensitive", () => {
    expect(isMarkdownFile("README.MD")).toBe(true);
    expect(isMarkdownFile("Doc.Markdown")).toBe(true);
    expect(isMarkdownFile("Page.MDX")).toBe(true);
  });

  it("rejects non-markdown files", () => {
    expect(isMarkdownFile("script.js")).toBe(false);
    expect(isMarkdownFile("style.css")).toBe(false);
    expect(isMarkdownFile("image.png")).toBe(false);
    expect(isMarkdownFile("data.json")).toBe(false);
  });
});
