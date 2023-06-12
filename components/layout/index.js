import Nav from "../nav"

export default function Layout({ children }) {
  return (
    <div className="container mx-auto">
      <Nav />
      {children}
    </div>
  )
}
