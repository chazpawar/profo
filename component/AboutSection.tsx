export default function AboutSection() {
  return (
    <div
      style={{
        padding: "2rem",
        minHeight: "100vh",
        backgroundColor: "#f8f8f8",
      }}
    >
      <section
        style={{
          margin: "2rem auto",
          maxWidth: "90vw",
          background: "#fff",
          border: "8px solid #000",
          borderRadius: 24,
          padding: "4rem 3rem 3rem 3rem",
          position: "relative",
          minHeight: "80vh",
        }}
      >
        {/* Background "about" text */}
        <div
          style={{
            position: "absolute",
            left: 40,
            bottom: 40,
            fontSize: "clamp(4rem, 8vw, 8rem)",
            fontWeight: 700,
            color: "#000",
            opacity: 0.08,
            zIndex: 0,
            lineHeight: 1,
            fontFamily: "system-ui, -apple-system, sans-serif",
          }}
        >
          about
        </div>

        {/* Quote in top left */}
        <div
          style={{
            position: "absolute",
            left: 48,
            top: 48,
            fontSize: 16,
            color: "#666",
            fontStyle: "italic",
            fontWeight: 400,
            opacity: 0.8,
            maxWidth: 300,
          }}
        >
          <span
            style={{
              borderLeft: "3px solid #ccc",
              paddingLeft: 16,
              display: "block",
            }}
          >
            Minimal design, enhanced by details and materials
          </span>
        </div>

        {/* Main content - Left aligned with justified text blocks */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            zIndex: 1,
            position: "relative",
            marginTop: "4rem",
            maxWidth: 480,
            margin: "4rem auto 0 auto",
            textAlign: "left",
          }}
        >
          {/* Main heading */}
          <div
            style={{
              fontSize: 24,
              fontWeight: 600,
              marginBottom: 24,
              lineHeight: 1.3,
              color: "#000",
              textAlign: "justify",
              width: "100%",
            }}
          >
            Student and learner learning at Kalvium, focused on
            creating complete product experiences.
          </div>

          {/* Description paragraph */}
          <div
            style={{
              fontSize: 15,
              color: "#333",
              marginBottom: 48,
              lineHeight: 1.6,
              textAlign: "justify",
              width: "100%",
            }}
          >
            I believe in the minimal and essential approach, expressed through
            the search for a balance between form, function and meaning, through
            the enhancement of details and the research of materials. I create
            products characterized by their own formal and aesthetic identity,
            expressed through the simplicity of the form and the
            rationalization of the concept, placing the user experience and
            communication at the center of development.
          </div>

          {/* Portrait Image */}
          <img
            src="/about.jpg"
            alt="Portrait"
            style={{
              width: 320,
              height: 400,
              objectFit: "cover",
              borderRadius: 8,
              marginBottom: 48,
              filter: "grayscale(100%)",
              alignSelf: "flex-start",
            }}
          />

          {/* Work Experience Section */}
          <div style={{ width: "100%" }}>
            <div
              style={{
                fontWeight: 600,
                fontSize: 20,
                marginBottom: 24,
                color: "#000",
                textAlign: "left",
              }}
            >
              Student at Kalvium
            </div>

            <div style={{ marginBottom: 32, textAlign: "left" }}>
              <div
                style={{
                  fontWeight: 600,
                  marginBottom: 6,
                  fontSize: 16,
                  color: "#000",
                }}
              >
                Chaitanya Pawar 
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: "#666",
                  marginBottom: 12,
                  fontWeight: 500,
                }}
              >
                NOV 14 2006 
              </div>
              <div
                style={{
                  fontSize: 14,
                  color: "#333",
                  lineHeight: 1.5,
                  textAlign: "justify",
                }}
              >
                Student Developer
                Aspiring full-stack developer currently learning the MERN stack. Passionate about building clean, modern, and innovative web applications while continuously exploring new technologies like Next.js, TypeScript, MongoDB, PostgreSQL, and more. Focused on turning ideas into user-friendly digital experiences through hands-on learning and experimentation.
              </div>
            </div>

            <div style={{ textAlign: "left" }}>
              <div
                style={{
                  fontWeight: 600,
                  marginBottom: 6,
                  fontSize: 16,
                  color: "#000",
                }}
              >
                
                <a 
                  href="https://github.com/cometerm"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: "none",
                    color: "#000",
                    transition: "color 0.2s ease",
                    outline: "none",
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLAnchorElement).style.color = "#666";
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLAnchorElement).style.color = "#000";
                  }}
                  onFocus={(e) => {
                    (e.target as HTMLAnchorElement).style.color = "#666";
                    (e.target as HTMLAnchorElement).style.outline = "2px solid #000";
                    (e.target as HTMLAnchorElement).style.outlineOffset = "2px";
                  }}
                  onBlur={(e) => {
                    (e.target as HTMLAnchorElement).style.color = "#000";
                    (e.target as HTMLAnchorElement).style.outline = "none";
                  }}
                >
                cometerm</a>
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: "#666",
                  marginBottom: 12,
                  fontWeight: 500,
                }}
              >
                 May 2025 - Started
              </div>
              <div
                style={{
                  fontSize: 14,
                  color: "#333",
                  lineHeight: 1.5,
                  textAlign: "justify",
                }}
              >
               
              
              A group of five passionate creators building innovative projects that push the boundaries of performance and usability. From brainstorming concepts to designing sleek interfaces and delivering blazing-fast user experiences, we handle every step with precision and creativity.

              </div>
            </div>
          </div>
        </div>

        {/* Social links - bottom right */}
        <div
          style={{
            position: "absolute",
            bottom: 48,
            right: 48,
            display: "flex",
            gap: 24,
            fontSize: 15,
            color: "#000",
          }}
        >
          <a
            href="https://www.instagram.com/chaitanyapawar_1411/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              color: "#000",
              fontWeight: 500,
              transition: "color 0.2s ease",
              outline: "none",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLAnchorElement).style.color = "#666";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLAnchorElement).style.color = "#000";
            }}
            onFocus={(e) => {
              (e.target as HTMLAnchorElement).style.color = "#666";
              (e.target as HTMLAnchorElement).style.outline = "2px solid #000";
              (e.target as HTMLAnchorElement).style.outlineOffset = "2px";
            }}
            onBlur={(e) => {
              (e.target as HTMLAnchorElement).style.color = "#000";
              (e.target as HTMLAnchorElement).style.outline = "none";
            }}
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/in/chaitanya-pawar-675306329/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              color: "#000",
              fontWeight: 500,
              transition: "color 0.2s ease",
              outline: "none",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLAnchorElement).style.color = "#666";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLAnchorElement).style.color = "#000";
            }}
            onFocus={(e) => {
              (e.target as HTMLAnchorElement).style.color = "#666";
              (e.target as HTMLAnchorElement).style.outline = "2px solid #000";
              (e.target as HTMLAnchorElement).style.outlineOffset = "2px";
            }}
            onBlur={(e) => {
              (e.target as HTMLAnchorElement).style.color = "#000";
              (e.target as HTMLAnchorElement).style.outline = "none";
            }}
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/chazpawar"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              color: "#000",
              fontWeight: 500,
              transition: "color 0.2s ease",
              outline: "none",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLAnchorElement).style.color = "#666";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLAnchorElement).style.color = "#000";
            }}
            onFocus={(e) => {
              (e.target as HTMLAnchorElement).style.color = "#666";
              (e.target as HTMLAnchorElement).style.outline = "2px solid #000";
              (e.target as HTMLAnchorElement).style.outlineOffset = "2px";
            }}
            onBlur={(e) => {
              (e.target as HTMLAnchorElement).style.color = "#000";
              (e.target as HTMLAnchorElement).style.outline = "none";
            }}
          >
            Github
          </a>
        </div>
      </section>
    </div>
  );
}