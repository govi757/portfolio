import "./styles/progressbar.css"
export const Progressbar = ({title="title", value="value"}) => {
    return(
        <div className="progress-container">
            <div className="flex-row my-2">
                <div className="flex1">{title}</div>
                <div>{value}%</div>
            </div>
            <div className="progressbar">
                <div className="active-progressbar" style={{width: `${value}%`}}>

                </div>
            </div>
        </div>
    )
}