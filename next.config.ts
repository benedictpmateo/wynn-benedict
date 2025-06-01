import type { NextConfig } from "next";

type RuleInferType = { test: { test: (arg0: string) => unknown } };

const nextConfig: NextConfig = {
  transpilePackages: ["next-international", "international-types"],
  webpack(config) {
    const fileLoaderRule = config.module.rules.find((rule: RuleInferType) =>
      rule.test?.test?.(".svg")
    );
    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
        use: ["@svgr/webpack"],
      }
    );
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};

export default nextConfig;
