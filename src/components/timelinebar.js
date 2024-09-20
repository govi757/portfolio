import './styles/timeline.css'
export const TimeLineBar = ({itemList=[]}) => {
    return <div>
        {
            itemList.map((item, index) => {
                return  <div key={"utem" + index} className="flex-row align-start">
                <div className='flex-col me-3'>
                    <div className="round"></div>
                    <div className={`resume-progress ${index==itemList.length-1&&'final-progress'} `}></div>
                </div>
                <div>
                    <div className="progressbar-title large primary">{item.title}</div>
                    <div className='grey medium'>{item.date}</div>
                    <div className='grey medium'>{item.subTitle}</div>
                </div>
            </div>
            })
        }
       
    </div>
}
