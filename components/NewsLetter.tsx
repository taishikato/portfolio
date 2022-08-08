const NewsLetter = () => (
  <div className="border-2 border-theme md:w-[500px] w-[90%] mx-auto p-6 text-slate-100 font-light weird-object1">
    <div className="w-[80%] mx-auto">
      <p className="text-base">Get notified when I release new stuff.</p>
      <p className="mb-2">
        Subscribed: <span className="font-semibold">84</span>
      </p>
      <div id="revue-embed" className="p-3 mx-auto rounded-md">
        <form
          action="https://www.getrevue.co/profile/taishik_/add_subscriber"
          method="post"
          id="revue-form"
          name="revue-form"
          target="_blank"
          className="flex flex-col gap-y-2">
          <div className="flex items-center justify-between revue-form-group">
            <label htmlFor="member_email">Email address</label>
            <input
              className="p-2 border rounded-full revue-form-field focus:outline-none focus:ring focus:ring-theme"
              placeholder="Your email address..."
              type="email"
              name="member[email]"
              id="member_email"
            />
          </div>
          <div className="flex items-center justify-between revue-form-group">
            <label htmlFor="member_first_name">
              First name <span className="optional">(Optional)</span>
            </label>
            <input
              className="p-2 border rounded-full revue-form-field focus:outline-none focus:ring focus:ring-theme"
              placeholder="First name... (Optional)"
              type="text"
              name="member[first_name]"
              id="member_first_name"
            />
          </div>
          <div className="flex items-center justify-between revue-form-group">
            <label htmlFor="member_last_name">
              Last name <span className="optional">(Optional)</span>
            </label>
            <input
              className="p-2 border rounded-full revue-form-field focus:outline-none focus:ring focus:ring-theme"
              placeholder="Last name... (Optional)"
              type="text"
              name="member[last_name]"
              id="member_last_name"
            />
          </div>
          <div className="revue-form-actions">
            <input
              type="submit"
              value="Subscribe"
              name="member[subscribe]"
              id="member_submit"
              className="p-3 font-semibold border-2 rounded-full cursor-pointer border-theme text-slate-200 shadow-box"
            />
          </div>
          <div className="text-sm font-light revue-form-footer">
            By subscribing, you agree with Revue’s{' '}
            <a target="_blank" href="https://www.getrevue.co/terms">
              Terms of Service
            </a>{' '}
            and{' '}
            <a target="_blank" href="https://www.getrevue.co/privacy">
              Privacy Policy
            </a>
            .
          </div>
        </form>
      </div>
    </div>
  </div>
)

export default NewsLetter
