import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const TimelinePage = () => {
  return (
    <Layout>
      <div className="columns">
        <div className="column col-1"></div>
        <div className="column col-9 col-sm-12">
          <div className="timeline">
      
            <div className="timeline-item" id="jays-firstgame">
              <div className="timeline-left">
                <a className="timeline-icon icon-lg tooltip" href="#jays-firstgame" data-tooltip="April 7, 1977">
                  <i class="icon icon-check"></i>
                </a>
              </div>
              <div className="timeline-content">
                <div className="tile">
                  <div className="tile-content">
                    <p className="tile-subtitle">April 7, 1977</p>
                    <p className="tile-title">First game</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="timeline-item" id="jays-playoff1">
              <div className="timeline-left">
                <a className="timeline-icon tooltip" href="#jays-playoff1" data-tooltip="October 8, 1985">
                  <i class="icon icon-check"></i>
                </a>
              </div>
              <div className="timeline-content">
                <div className="tile">
                  <div className="tile-content">
                    <p className="tile-subtitle">October 8, 1985</p>
                    <p className="tile-title">First playoff game</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="timeline-item" id="jays-playoff2">
              <div className="timeline-left">
                <a className="timeline-icon tooltip" href="#jays-playoff2" data-tooltip="October 8, 1989">
                  <i class="icon icon-check"></i>
                </a>
              </div>
              <div className="timeline-content">
                <div className="tile">
                  <div className="tile-content">
                    <p className="tile-subtitle">October 8, 1989</p>
                    <p className="tile-title">Jays lose ALCS to Oakland A's</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="timeline-item" id="jays-stieb">
              <div className="timeline-left">
                <a className="timeline-icon tooltip" href="#jays-stieb" data-tooltip="September 2, 1990">
                  <i class="icon icon-check"></i>
                </a>
              </div>
              <div className="timeline-content">
                <div className="tile">
                  <div className="tile-content">
                    <p className="tile-subtitle">September 2, 1990</p>
                    <p className="tile-title">Dave Stieb no-hits the Indians</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="timeline-item" id="jays-playoff3">
              <div className="timeline-left">
                <a className="timeline-icon tooltip" href="#jays-playoff3" data-tooltip="October 13, 1991">
                  <i class="icon icon-check"></i>
                </a>
              </div>
              <div className="timeline-content">
                <div className="tile">
                  <div className="tile-content">
                    <p className="tile-subtitle">October 13, 1991</p>
                    <p className="tile-title">Jays lose ALCS to Minnesota Twins</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="timeline-item" id="jays-playoff4">
              <div className="timeline-left">
                <a className="timeline-icon tooltip" href="#jays-playoff4" data-tooltip="October 11, 1992">
                  <i class="icon icon-check"></i>
                </a>
              </div>
              <div className="timeline-content">
                <div className="tile">
                  <div className="tile-content">
                    <p className="tile-subtitle">October 11, 1992</p>
                    <p className="tile-title">Roberto Alomar hits HR against god-damn Eckersley</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="timeline-item" id="jays-playoff5">
              <div className="timeline-left">
                <a className="timeline-icon icon-lg tooltip" href="#jays-playoff5" data-tooltip="October 24, 1992">
                  <i class="icon icon-check"></i>
                </a>
              </div>
              <div className="timeline-content">
                <div className="tile">
                  <div className="tile-content">
                    <p className="tile-subtitle">October 24, 1992</p>
                    <p className="tile-title">Jays beat Atlanta Braves to win first World Series</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="timeline-item" id="jays-playoff6">
              <div className="timeline-left">
                <a className="timeline-icon icon-lg tooltip" href="#jays-playoff6" data-tooltip="October 24, 1993">
                  <i class="icon icon-check"></i>
                </a>
              </div>
              <div className="timeline-content">
                <div className="tile">
                  <div className="tile-content">
                    <p className="tile-subtitle">October 24, 1993</p>
                    <p className="tile-title">Joe Carter hits a walk-off HR to win second World Series</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </Layout>
  )
}

export default TimelinePage