import type { IncomingMessage, ServerResponse } from "node:http";

export const productController = (
  req: IncomingMessage,
  res: ServerResponse,
) => {
  const url = req.url;
  const method = req.method;
  const products = [
    {
      id: 1213,
      name: "Poduct item-1",
    },
  ];

  if (url === "/products" && method === "GET") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(
      JSON.stringify({
        message: "Product retrived successfully",
        data: products,
      }),
    );
  }
};
