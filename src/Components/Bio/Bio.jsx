import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import DynamicHeader from '../Header/DUI';
import Navbar from '../Navigation/Navbar';
import Search from '../Search/Search';
import bioProfiles from './data';
import PersonIcon from '../../Assets/Icons/Person.png';
import { clearAuthUser, getAuthUser } from '../../auth';
import './Bio.css';

export default function Bio() {
  const [query, setQuery] = useState('');
  const [department, setDepartment] = useState('');
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [authUser, setAuthUser] = useState(() => getAuthUser());
  const isAuthenticated = Boolean(authUser);

  const departments = useMemo(() => {
    return [...new Set(bioProfiles.map((profile) => profile.department))].sort();
  }, []);

  useEffect(() => {
    const syncAuthUser = () => setAuthUser(getAuthUser());

    window.addEventListener('huge-auth-change', syncAuthUser);
    window.addEventListener('storage', syncAuthUser);

    return () => {
      window.removeEventListener('huge-auth-change', syncAuthUser);
      window.removeEventListener('storage', syncAuthUser);
    };
  }, []);

  const openProfileFromKeyboard = (event, profile) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setSelectedProfile(profile);
    }
  };

  const maskPhone = (phone) => {
    const digits = phone.replace(/\D/g, '');
    const visibleFirst = digits.slice(0, 2);
    const visibleLast = digits.slice(-1);

    return `+${visibleFirst} ${digits[2] || ''}*********${visibleLast}`;
  };

  const maskEmail = (email) => {
    const [name, domain] = email.split('@');
    const visibleName = name.slice(0, 3);

    return `${visibleName}**********@${domain}`;
  };

  const getVisiblePhone = (profile) => {
    return isAuthenticated ? profile.phone : maskPhone(profile.phone);
  };

  const getVisibleEmail = (profile) => {
    return isAuthenticated ? profile.email : maskEmail(profile.email);
  };

  const filteredProfiles = useMemo(() => {
    const term = query.trim().toLowerCase();

    return bioProfiles.filter((profile) => {
      const matchesDepartment = !department || profile.department === department;
      const matchesName = !term || profile.name.toLowerCase().includes(term);

      return matchesDepartment && matchesName;
    });
  }, [department, query]);

  return (
    <>
      <DynamicHeader />
      <Navbar />
      <Search />
      <main className="bio-page">
        <section className="bio-directory" aria-label="Government people bio directory">
          <div className="bio-toolbar">
            <div className="bio-filter">
              <label className="bio-filter-label pls-700" htmlFor="bio-department">
                Select Department
              </label>
              <select
                className="bio-select pls"
                id="bio-department"
                value={department}
                onChange={(event) => setDepartment(event.target.value)}
              >
                <option value="">All departments</option>
                {departments.map((departmentName) => (
                  <option key={departmentName} value={departmentName}>
                    {departmentName}
                  </option>
                ))}
              </select>
            </div>

            <div className="bio-filter bio-filter-search">
              <label className="bio-filter-label pls-700" htmlFor="bio-name-search">
                Search by Name
              </label>
              <input
                className="bio-search pls"
                id="bio-name-search"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Type a person name"
              />
            </div>

            <span className="bio-count pls-700">
              {filteredProfiles.length} profiles
            </span>
          </div>

          <div className="bio-auth-strip">
            {isAuthenticated ? (
              <>
                <span className="bio-auth-copy pls">
                  Signed in as {authUser.name}
                </span>
                <button
                  className="bio-auth-button pls-700"
                  type="button"
                  onClick={clearAuthUser}
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <span className="bio-auth-copy pls">
                  Contact details are hidden until you sign in.
                </span>
                <Link className="bio-auth-button pls-700" to="/login">
                  Sign In
                </Link>
              </>
            )}
          </div>

          <div className="bio-grid">
            {filteredProfiles.map((profile) => (
              <article
                className="bio-card"
                key={profile.id}
                role="button"
                tabIndex="0"
                onClick={() => setSelectedProfile(profile)}
                onKeyDown={(event) => openProfileFromKeyboard(event, profile)}
              >
                <img
                  className="bio-photo"
                  src={PersonIcon}
                  alt={`${profile.name} profile`}
                />
                <div className="bio-card-text">
                  <h2 className="bio-name pls-700">{profile.name}</h2>
                  {isAuthenticated ? (
                    <>
                      <a
                        className="bio-contact pls"
                        href={`tel:${profile.phone}`}
                        onClick={(event) => event.stopPropagation()}
                      >
                        {getVisiblePhone(profile)}
                      </a>
                      <a
                        className="bio-contact pls"
                        href={`mailto:${profile.email}`}
                        onClick={(event) => event.stopPropagation()}
                      >
                        {getVisibleEmail(profile)}
                      </a>
                    </>
                  ) : (
                    <>
                      <span className="bio-contact pls">{getVisiblePhone(profile)}</span>
                      <span className="bio-contact pls">{getVisibleEmail(profile)}</span>
                    </>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {selectedProfile && (
          <div className="bio-modal" role="dialog" aria-modal="true">
            <button
              className="bio-modal-backdrop"
              type="button"
              aria-label="Close bio"
              onClick={() => setSelectedProfile(null)}
            />

            <article className="bio-detail">
              <button
                className="bio-close"
                type="button"
                onClick={() => setSelectedProfile(null)}
                aria-label="Close bio"
              >
                Close
              </button>

              <div className="bio-detail-header">
                <img
                  className="bio-detail-photo"
                  src={PersonIcon}
                  alt={`${selectedProfile.name} profile`}
                />
                <div>
                  <h2 className="bio-detail-name pls-700">{selectedProfile.name}</h2>
                  <p className="bio-role pls-500">{selectedProfile.role}</p>
                  <p className="bio-status pls-700">
                    {selectedProfile.verified ? 'Verified profile' : 'Pending verification'}
                  </p>
                </div>
              </div>

              <dl className="bio-meta pls">
                <div>
                  <dt>Contact Number</dt>
                  <dd>
                    {isAuthenticated ? (
                      <a href={`tel:${selectedProfile.phone}`}>{getVisiblePhone(selectedProfile)}</a>
                    ) : (
                      getVisiblePhone(selectedProfile)
                    )}
                  </dd>
                </div>
                <div>
                  <dt>Email</dt>
                  <dd>
                    {isAuthenticated ? (
                      <a href={`mailto:${selectedProfile.email}`}>{getVisibleEmail(selectedProfile)}</a>
                    ) : (
                      getVisibleEmail(selectedProfile)
                    )}
                  </dd>
                </div>
                <div>
                  <dt>Department</dt>
                  <dd>{selectedProfile.department}</dd>
                </div>
                <div>
                  <dt>Region</dt>
                  <dd>{selectedProfile.region}</dd>
                </div>
              </dl>

              <p className="bio-summary pls-200">{selectedProfile.summary}</p>

              <div className="bio-tags">
                {selectedProfile.tags.map((tag) => (
                  <span className="bio-tag pls" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>

              {!isAuthenticated && (
                <div className="bio-lock">
                  <p className="bio-lock-copy pls-700">
                    Sign in or create an account to view full contact details.
                  </p>
                  <div className="bio-lock-actions">
                    <Link className="bio-lock-button pls-700" to="/login">
                      Sign In
                    </Link>
                    <Link className="bio-lock-button secondary pls-700" to="/register">
                      Sign Up
                    </Link>
                  </div>
                </div>
              )}
            </article>
          </div>
        )}
      </main>
    </>
  )
}
