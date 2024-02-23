export const ColorfulMessage = (props) => {
    console.log(props )
    const contentStyleA = {
        color,
        fontSize: "18px"
    }

    return (
        <p style={contentStyleA}>{props.children}</p>
    )
}
