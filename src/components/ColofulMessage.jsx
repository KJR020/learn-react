export const ColorfulMessage = (props) => {
    console.log(props )
    const contentStyleA = {
        color: props.color,
        fonssize: "18px"
    }

    return (
        <p style={contentStyleA}>{props.message}</p>
    )
}
