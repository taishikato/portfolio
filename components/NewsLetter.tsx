const NewsLetter = () => (
  <>
    <p className="text-base">Get notified when I release new stuff.</p>
    <p>🙏 Subscribed: 84</p>
    <div id="revue-embed bg-slate-300" className="p-3 mx-auto rounded-md bg-slate-300 md:w-96 w-[90%] text-slate-700">
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
            className="p-2 border rounded-md revue-form-field"
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
            className="p-2 border rounded-md revue-form-field"
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
            className="p-2 border rounded-md revue-form-field"
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
            className="p-3 rounded-md cursor-pointer bg-sky-500 text-slate-200 hover:bg-sky-600"
          />
        </div>
        <div className="revue-form-footer">
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
  </>
)

export default NewsLetter
