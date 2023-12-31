export default function Footer() {
  return (
    <footer>
      <div class="container margin_120_95">
        <div class="row justify-content-between">
          <div class="col-lg-5 col-md-12">
            <p>
              <img src="img/logo.webp" width="163" height="134" alt="" />
            </p>
            <p>
              AskMof adalah salah satu layanan yang diciptakan oleh tim Kemenkeu AI.
            </p>
            <div class="follow_us">
              <ul>
                <li>Follow us</li>
                <li>
                  <a href="#0">
                    <i class="ti-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#0">
                    <i class="ti-twitter-alt"></i>
                  </a>
                </li>
                <li>
                  <a href="#0">
                    <i class="ti-google"></i>
                  </a>
                </li>
                <li>
                  <a href="#0">
                    <i class="ti-pinterest"></i>
                  </a>
                </li>
                <li>
                  <a href="#0">
                    <i class="ti-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 ml-lg-auto">
            <h5>Useful links</h5>
            <ul class="links">
              <li>
                <a href="#0">About</a>
              </li>
              <li>
                <a href="#0">Login</a>
              </li>
              <li>
                <a href="#0">Register</a>
              </li>
              <li>
                <a href="#0">News &amp; Events</a>
              </li>
              <li>
                <a href="#0">Contacts</a>
              </li>
            </ul>
          </div>
          <div class="col-lg-3 col-md-6">
            <h5>Contact with Us</h5>
            <ul class="contacts">
            </ul>
            <div id="newsletter">
              <h6>Newsletter</h6>
              <div id="message-newsletter"></div>
              <form
                method="post"
                action="assets/newsletter.php"
                name="newsletter_form"
                id="newsletter_form"
              >
                <div class="form-group">
                  <input
                    type="email"
                    name="email_newsletter"
                    id="email_newsletter"
                    class="form-control"
                    placeholder="Your email"
                  />
                  <input type="submit" value="Submit" id="submit-newsletter" />
                </div>
              </form>
            </div>
          </div>
        </div>
        <hr />
        <div class="row">
          <div class="col-md-8">
            <ul id="additional_links">
              <li>
                <a href="#0">Terms and conditions</a>
              </li>
              <li>
                <a href="#0">Privacy</a>
              </li>
            </ul>
          </div>
          <div class="col-md-4">
            <div id="copy">© Udema</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
