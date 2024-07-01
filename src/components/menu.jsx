function Menu(props) {
    return (
        <div className="text-white hover:text-red-500 hover:cursor-pointer">
            <div className="flex text-white hover:bg-indigo-300 rounded-full px-6 py-2 text-xl">
            <p>{props.children}</p>
            </div>
        </div>
    )
}

export default Menu