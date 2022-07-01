import React from 'react'
import '../containers/Contact';
import { Icon } from '@iconify/react';




function Desktop9top() {
  return (

    <div className="desktop9top">
        <div class="contact-grid">

        <div class="contact-column1">
            <h1 className='contactcolumnheaderfont1'>Information About us</h1>
            <p className='contactcolumnfont1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.
            </p>
            {/* <img id= "column2img"src={tripledot}/> */}
            <div id="tripledot">
                <ul>
                <li id='dot1'><Icon icon="bi:circle-fill" color="#5625df" height={25} width={25}/></li>
                <li id='dot2'> <Icon icon="bi:circle-fill" color="#ff27b7" height={25} width={25} /></li>
                <li id='dot3'><Icon icon="bi:circle-fill" color="#37daf3" height={25} width={25} /></li>
                </ul>
            </div>
        </div>


        <div class="contact-column2">
            <h1 className='contactcolumnheaderfont1'>Contact Way</h1>

            <p className='contactcolumnfont2'>
                <div class="row">
                <div class="column">
                    {/* <h2>Column 1</h2> */}
                    <ul id="list1">
                        <div id="leftbox1">

                        <div id='largeball'><Icon icon="bi:circle-fill" color="#5625df" height={40} width={75}/> </div>
                        {/* <div id='largeball'>  <img id= "column2img"src={largeball}/></div> */}
                        <li>  Tel: 020 7462 7459 </li>
                        <li> E-Mail: Pixpara@store.com </li>
                        </div>
                    </ul>
                </div>
                
                <div class="column">
                    {/* <h2>Column 2</h2> */}  
                    <ul id="list2">
                    <div id='largeball'><Icon icon="bi:circle-fill" color="#FB2E86" height={40} width={75}/> </div>
                        <div id="leftbox1">
                        <li> Support Forum </li>
                        <li> For over 24hr </li>  
                        </div>
                    </ul>
                </div>
                
                </div>
                <br/>
                <br/>

                <div class="row">
                <div class="column">
                    {/* <h2>Column 3</h2> */}
                    <ul id="list3">
                        <div id="leftbox1">
                        <div id='largeball'><Icon icon="bi:circle-fill" color="#FFB265" height={40} width={75}/> </div>
                        <li> London, England</li>
                        <li> United Kingdom </li>
                        </div>
                    </ul>
                </div>

                <div class="column">
                    {/* <h2>Column 4</h2> */}
                     <ul id="list4">
                     <div id='largeball'><Icon icon="bi:circle-fill" color="#1BE982" height={40} width={75}/> </div>

                        <div id="leftbox1">
                        <li> Free standard  shipping </li>
                        <li> on all orders </li>  
                        </div>
                     </ul>
                  </div>
             </div>                       
          </p>
         </div>
    </div>
 </div>
  )
}

export default Desktop9top