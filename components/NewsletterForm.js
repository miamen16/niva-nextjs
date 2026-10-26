"use client";

export default function NewsletterForm() {
  function handleSubmit(event) {
    event.preventDefault();
    alert("Connect a newsletter provider before launch.");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">YOUR EMAIL ADDRESS</label>
      <div className="email-row">
        <input id="email" name="email" type="email" placeholder="you@example.com" autoComplete="email" required />
        <button type="submit" aria-label="Subscribe">↗</button>
      </div>
      <small>Newsletter integration required before launch.</small>
    </form>
  );
}
