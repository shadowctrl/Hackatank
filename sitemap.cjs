const { SitemapStream, streamToPromise } = require("sitemap");
const { createReadStream, createWriteStream } = require("fs");
const { Readable } = require("stream");
const { StaticRouter } = require("react-router-dom");
const React = require("react");
const ReactDOMServer = require("react-dom/server");

const renderToString = (element) =>
  ReactDOMServer.renderToString(React.createElement(element));

async function generateSitemap() {
  const staticRoutes = [
    "/",
    "about",
    "guidelines",
    "events",
    "/set1",
    "/set2",
    "/judges",
    "/#contact",
  ];

  const smStream = new SitemapStream({
    hostname: "https://www.hackatank.tech",
  });

  staticRoutes.forEach((route) => {
    smStream.write({
      url: route,
      changefreq: "daily",
      priority: 1,
    });
  });

  smStream.end();

  const sitemapXml = await streamToPromise(Readable.from(smStream), {
    encoding: "utf-8",
  });

  const writeStream = createWriteStream("./public/sitemap.xml");
  writeStream.write(sitemapXml);
  writeStream.end();
}
generateSitemap();
