import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* Keep tracing scoped to this project to avoid monorepo lockfile confusion */
  outputFileTracingRoot: path.resolve(__dirname),
};

export default nextConfig;
