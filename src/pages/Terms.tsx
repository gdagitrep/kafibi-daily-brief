import PageShell from "@/components/PageShell";
import InfoPage from "@/components/InfoPage";

const Terms = () => {
  return (
    <PageShell>
      <InfoPage
        eyebrow=""
        title="Terms of Use"
        intro="These terms govern access to and use of the Kabifi website. By using the site, you agree to these terms."
      >
        <section>
          <h2 className="text-2xl font-semibold">Website Purpose</h2>
          <p className="mt-3 text-muted-foreground">
            Kabifi provides information about its retail operations software,
            product capabilities, and early access availability. Content is for
            general informational purposes and may change without notice.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Permitted Use</h2>
          <p className="mt-3 text-muted-foreground">
            You may use the website for lawful business and informational
            purposes. You may not interfere with the site, attempt unauthorized
            access, or use the site in a way that harms Kabifi or other users.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">No Product Commitment</h2>
          <p className="mt-3 text-muted-foreground">
            Descriptions of features, roadmaps, and capabilities are illustrative
            and do not create a binding commitment to provide any particular
            functionality, timeline, or service level.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Intellectual Property</h2>
          <p className="mt-3 text-muted-foreground">
            The Kabifi name, logo, website content, and related materials are
            owned by Kabifi or its licensors and may not be copied, modified, or
            reused without permission, except as allowed by law.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Third-Party Services</h2>
          <p className="mt-3 text-muted-foreground">
            The website may rely on third-party hosting, analytics, or other
            services. Kabifi is not responsible for third-party sites or services
            that may be linked from this website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Disclaimer</h2>
          <p className="mt-3 text-muted-foreground">
            The website is provided on an as-is and as-available basis without
            warranties of any kind, whether express or implied, to the fullest
            extent permitted by law.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Limitation of Liability</h2>
          <p className="mt-3 text-muted-foreground">
            To the fullest extent permitted by law, Kabifi will not be liable for
            indirect, incidental, special, consequential, or punitive damages
            arising from use of or inability to use the website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Changes to These Terms</h2>
          <p className="mt-3 text-muted-foreground">
            Kabifi may revise these terms from time to time by updating this page.
            Continued use of the website after updates means you accept the
            revised terms.
          </p>
        </section>
      </InfoPage>
    </PageShell>
  );
};

export default Terms;
