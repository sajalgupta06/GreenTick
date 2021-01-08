import React from 'react'
import '../css/graph.css'


export default function Dashborad() {

    const datapercent = 56;
   const  deg = 360*datapercent/100;

    const mystyle ={
        transform: 'rotate('+ deg +'deg)',
    }

   
    return (
       
        <div class="progressDiv">
            <div class="statChartHolder">
                <div class={datapercent>50?"progress-pie-chart gt-50":"progress-pie-chart"} data-percent={datapercent}>
                    <div class="ppc-progress">
                        <div class="ppc-progress-fill" style={mystyle}></div>
                    </div>
                    <div class="ppc-percents">
                    <div class="pcc-percents-wrapper">
                        <span>{datapercent}%</span>
                    </div>
                    </div>
                </div>
            </div>
           
        </div>
    
        
    )
}
