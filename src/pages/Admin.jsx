import React, { useState, useEffect } from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

export default function Admin() {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({
    title: '',
    category: '',
    image: '',
    liveUrl: '',
    description: '',
  });
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);

  const API_URL = import.meta.env.VITE_API_URL || 
                  (import.meta.env.PROD ? 'https://pixel-forge-backend-6.onrender.com' : 'http://localhost:5000');

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await fetch(`${API_URL}/api/projects`);
      if (res.ok) {
        const data = await res.json();
        setProjects(data);
      }
    } catch (err) {
      console.error('Failed to fetch projects', err);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append('image', file);

    try {
      const res = await fetch(`${API_URL}/api/upload`, {
        method: 'POST',
        body: formData,
      });
      if (res.ok) {
        const data = await res.json();
        setForm({ ...form, image: data.url });
      } else {
        alert('Image upload failed');
      }
    } catch (err) {
      console.error('Upload error', err);
      alert('Image upload error');
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title || !form.category || !form.description) {
      alert('Title, Category and Description are required.');
      return;
    }

    setLoading(true);
    try {
      let res;
      if (editingId) {
        res = await fetch(`${API_URL}/api/projects/${editingId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        });
      } else {
        res = await fetch(`${API_URL}/api/projects`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        });
      }

      if (res.ok) {
        setForm({ title: '', category: '', image: '', liveUrl: '', description: '' });
        setEditingId(null);
        fetchProjects();
      } else {
        alert('Failed to save project');
      }
    } catch (err) {
      console.error('Save error', err);
      alert('Error saving project');
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (project) => {
    setForm({
      title: project.title,
      category: project.category,
      image: project.image || '',
      liveUrl: project.liveUrl || '',
      description: project.description,
    });
    setEditingId(project._id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this project?')) return;
    try {
      const res = await fetch(`${API_URL}/api/projects/${id}`, { method: 'DELETE' });
      if (res.ok) {
        fetchProjects();
      }
    } catch (err) {
      console.error('Delete error', err);
    }
  };

  const cancelEdit = () => {
    setForm({ title: '', category: '', image: '', liveUrl: '', description: '' });
    setEditingId(null);
  };

  return (
    <div className="page-wrapper" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main style={{ flex: 1, padding: 'clamp(5rem, 10vw, 8rem) 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          
          <div style={{ marginBottom: '3rem' }}>
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '0.5rem' }}>Admin Dashboard</h1>
            <p style={{ color: 'var(--fg-muted)' }}>Manage your portfolio projects securely.</p>
          </div>

          <div style={{
            background: 'var(--bg-alt)',
            border: '1px solid var(--border)',
            borderRadius: '1rem',
            padding: '2rem',
            marginBottom: '4rem'
          }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>{editingId ? 'Edit Project' : 'Add Project'}</h2>
            
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.9rem', fontWeight: 500 }}>Project Title</label>
                  <input
                    type="text"
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                    placeholder="e.g. Meta Ad Campaign Scale"
                    style={inputStyle}
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.9rem', fontWeight: 500 }}>Category</label>
                  <input
                    type="text"
                    name="category"
                    value={form.category}
                    onChange={handleChange}
                    placeholder="e.g. Performance Marketing"
                    style={inputStyle}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.9rem', fontWeight: 500 }}>Image URL</label>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <input
                    type="text"
                    name="image"
                    value={form.image}
                    onChange={handleChange}
                    placeholder="https://..."
                    style={{ ...inputStyle, flex: 1 }}
                  />
                  <div style={{ position: 'relative', width: '3rem', height: '3rem', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                    <input type="file" onChange={handleImageUpload} accept="image/*" style={{ position: 'absolute', inset: 0, opacity: 0, cursor: 'pointer' }} disabled={uploading} />
                  </div>
                </div>
                <span style={{ fontSize: '0.8rem', color: 'var(--fg-muted)', alignSelf: 'flex-end' }}>
                  {uploading ? 'Uploading...' : 'Upload image or paste URL'}
                </span>
                {form.image && (
                  <img src={form.image} alt="Preview" style={{ height: '100px', objectFit: 'cover', borderRadius: '0.5rem', marginTop: '0.5rem' }} />
                )}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.9rem', fontWeight: 500 }}>Live URL (Optional)</label>
                <input
                  type="text"
                  name="liveUrl"
                  value={form.liveUrl}
                  onChange={handleChange}
                  placeholder="https://livedemo.com"
                  style={inputStyle}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.9rem', fontWeight: 500 }}>Description</label>
                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  placeholder="Briefly describe the project..."
                  rows="4"
                  style={{ ...inputStyle, resize: 'vertical' }}
                />
              </div>

              <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                <button
                  type="submit"
                  disabled={loading || uploading}
                  style={{
                    flex: 1,
                    background: 'var(--accent-bright)',
                    color: '#000',
                    border: 'none',
                    padding: '1rem',
                    borderRadius: '0.5rem',
                    fontWeight: 600,
                    cursor: (loading || uploading) ? 'not-allowed' : 'pointer',
                    transition: 'opacity 0.2s'
                  }}
                >
                  {loading ? 'Saving...' : (editingId ? 'Update Project' : '+ Add Project')}
                </button>
                {editingId && (
                  <button
                    type="button"
                    onClick={cancelEdit}
                    style={{
                      padding: '1rem 2rem',
                      background: 'transparent',
                      color: 'var(--fg)',
                      border: '1px solid var(--border)',
                      borderRadius: '0.5rem',
                      cursor: 'pointer'
                    }}
                  >
                    Cancel
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Current Projects Section */}
          <div>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Current Projects</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {projects.length === 0 ? (
                <p style={{ color: 'var(--fg-muted)' }}>No projects found. Add one above.</p>
              ) : (
                projects.map(project => (
                  <div key={project._id} style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '1rem',
                    background: 'var(--bg-alt)',
                    border: '1px solid var(--border)',
                    borderRadius: '0.75rem'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div style={{ width: '60px', height: '40px', background: 'var(--bg)', borderRadius: '0.25rem', overflow: 'hidden' }}>
                        {project.image ? (
                          <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        ) : (
                          <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', color: 'var(--fg-muted)' }}>No img</div>
                        )}
                      </div>
                      <div>
                        <h4 style={{ fontSize: '1rem', margin: 0, color: 'var(--fg)' }}>{project.title}</h4>
                        <p style={{ fontSize: '0.8rem', margin: 0, color: 'var(--fg-muted)' }}>{project.category}</p>
                      </div>
                    </div>
                    
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noreferrer" style={iconButtonStyle} title="View Live">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        </a>
                      )}
                      <button onClick={() => handleEdit(project)} style={iconButtonStyle} title="Edit">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                      </button>
                      <button onClick={() => handleDelete(project._id)} style={{ ...iconButtonStyle, color: '#ef4444' }} title="Delete">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}

const inputStyle = {
  width: '100%',
  padding: '0.875rem',
  background: 'rgba(255, 255, 255, 0.03)',
  border: '1px solid var(--border)',
  borderRadius: '0.5rem',
  color: 'var(--fg)',
  fontSize: '0.95rem',
  outline: 'none',
  transition: 'border-color 0.2s'
};

const iconButtonStyle = {
  background: 'transparent',
  border: 'none',
  color: 'var(--fg-muted)',
  cursor: 'pointer',
  padding: '0.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'color 0.2s',
  ':hover': {
    color: 'var(--fg)'
  }
};
