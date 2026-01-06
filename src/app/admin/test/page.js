export default function AdminTest() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Admin Route Test</h1>
      <p>If you can see this page, the /admin route is working!</p>
      <p>
        <a href="/admin/login" style={{ color: 'blue', textDecoration: 'underline' }}>
          Go to Admin Login →
        </a>
      </p>
      <div style={{ marginTop: '20px', padding: '10px', background: '#f0f0f0' }}>
        <strong>Debug Info:</strong>
        <ul>
          <li>Route: /admin/test</li>
          <li>Time: {new Date().toISOString()}</li>
        </ul>
      </div>
    </div>
  );
}
