import React, {Component} from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div>
                <footer id="sticky-footer" className="py-5">
                  <div class = "row">
                      <div class="col-12 col-md-4">
                          <h5>Khaled Ramzi</h5>
                          <small className="d-block mb-3 text-muted">© 2019-2020</small>
                  </div>
                      <div className="col-6 col-md">
                          <h5>Made with</h5>
                          <ul className="list-unstyled text-small">
                              <li><a className="text-muted" href="#">React JS</a></li>
                              <li><a className="text-muted" href="#">Bootstrap</a></li>
                              <li><a className="text-muted" href="#">CSS</a></li>

                          </ul>
                      </div>

                      <div className="col-6 col-md">
                          <h5>About</h5>
                          <ul className="list-unstyled text-small">
                              <li><a className="text-muted" href="#">Hogeschool van Amsterdam</a></li>
                              <li><a className="text-muted" href="#">Internet of Things</a></li>
                          </ul>
                      </div>
                  </div>
                </footer>
            </div>
        );
    }
}

export default Footer;