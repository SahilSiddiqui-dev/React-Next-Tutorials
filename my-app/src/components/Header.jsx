export default function Header(props){
    return(
        <>
        <h1>{props.title}</h1>
        <nav className="nav">
            <a href="">HOME</a>
            <a href="">ABOUT US</a>
            <a href="">CONTACT US</a>
        </nav>

        </>
    )
}