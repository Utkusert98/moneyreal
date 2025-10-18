export function fakeAuth(req, res, next) {
  // TODO: JWT decode edip req.user = { id } setle
  req.user = { id: "66f000000000000000000001" }; // dev için dummy
  next();
}