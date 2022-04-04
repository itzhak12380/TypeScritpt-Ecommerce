export const API =
  process.env.NODE_ENV === "production"
    ? `https://lifeproduct.herokuapp.com`
    : "http://localhost:8080";


export const GetErrorMessage = (error: unknown) => {
  
  let message
  if (error instanceof Error) message = error.message
  else message = String(error)
  alert(message)
}