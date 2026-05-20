import { 
  Home, Search, Bell, Users, MessageSquare, Zap, 
  Bookmark, ShieldCheck, User, MoreHorizontal, 
  Image as ImageIcon, Smile, Calendar, MapPin, 
  ListTodo, Repeat2, Heart, BarChart2, Share, CheckCircle2
} from 'lucide-react';
import './App.css';

function App() {
  return (
    <div className="app-container">
      {/* Left Sidebar */}
      <header className="left-sidebar">
        <div className="nav-container">
          <div className="logo-container">
            <span className="x-logo">𝕏</span>
          </div>
          
          <nav className="nav-links">
            <div className="nav-item active">
              <Home size={26} strokeWidth={2.5} />
              <span>Home</span>
            </div>
            <div className="nav-item">
              <Search size={26} />
              <span>Explore</span>
            </div>
            <div className="nav-item">
              <div className="icon-badge-wrapper">
                <Bell size={26} />
                <span className="badge">2</span>
              </div>
              <span>Notifications</span>
            </div>
            <div className="nav-item">
              <Users size={26} />
              <span>Follow</span>
            </div>
            <div className="nav-item">
              <MessageSquare size={26} />
              <span>Chat</span>
            </div>
            <div className="nav-item">
              <Zap size={26} />
              <span>Grok</span>
            </div>
            <div className="nav-item">
              <Bookmark size={26} />
              <span>Bookmarks</span>
            </div>
            <div className="nav-item">
              <span className="x-logo-small">𝕏</span>
              <span>Premium</span>
              <span className="premium-tag">50% off</span>
            </div>
            <div className="nav-item">
              <User size={26} />
              <span>Profile</span>
            </div>
            <div className="nav-item">
              <MoreHorizontal size={26} />
              <span>More</span>
            </div>
          </nav>

          <button className="post-btn-large">Post</button>
        </div>

        <div className="profile-pill">
          <img src="https://ui-avatars.com/api/?name=Bangla+Senpai&background=random" alt="Profile" className="avatar" />
          <div className="profile-info">
            <div className="name">Bangla </div>
            <div className="handle">@bangala</div>
          </div>
          <MoreHorizontal size={20} className="more-icon" />
        </div>
      </header>

      {/* Main Feed Column */}
      <main className="main-feed">
        {/* Top Header */}
        <div className="feed-header">
          <div className="tab active">
            <span>For you</span>
            <div className="active-indicator"></div>
          </div>
          <div className="tab">
            <span>Following</span>
          </div>
        </div>

        {/* Post Composer */}
        <div className="post-composer">
          <img src="https://ui-avatars.com/api/?name=Bangla+Senpai&background=random" alt="Profile" className="avatar" />
          <div className="composer-content">
            <input type="text" placeholder="What's happening?" className="composer-input" />
            <div className="composer-actions">
              <div className="action-icons">
                <ImageIcon size={20} className="icon-blue" />
                <div className="gif-icon icon-blue">GIF</div>
                <ListTodo size={20} className="icon-blue" />
                <Smile size={20} className="icon-blue" />
                <Calendar size={20} className="icon-blue" />
                <MapPin size={20} className="icon-blue disabled" />
              </div>
              <button className="post-btn-small" disabled>Post</button>
            </div>
          </div>
        </div>

        {/* Feed Posts */}
        <div className="post">
          <img src="https://ui-avatars.com/api/?name=Elon+Musk&background=random" alt="Elon Musk" className="avatar" />
          <div className="post-content">
            <div className="post-header">
              <span className="name">Elon Musk</span>
              <CheckCircle2 size={16} className="verified-icon" fill="#1d9bf0" color="white" />
              <span className="x-badge">𝕏</span>
              <span className="handle">@elonmusk · May 18</span>
              <MoreHorizontal size={18} className="more-options" />
            </div>
            
            {/* Simulating Video Placeholder */}
            <div className="post-media video-placeholder">
              <div className="video-info">
                <span>5:27</span>
                <span>From 🛡️ Ignorance, the root and stem of all evil</span>
              </div>
            </div>

            <div className="post-engagements">
              <div className="engagement"><MessageSquare size={18} /> 9.2K</div>
              <div className="engagement"><Repeat2 size={18} /> 23K</div>
              <div className="engagement"><Heart size={18} /> 156K</div>
              <div className="engagement"><BarChart2 size={18} /> 55M</div>
              <div className="engagement actions">
                <Bookmark size={18} />
                <Share size={18} />
              </div>
            </div>
          </div>
        </div>

        {/* Ad Post */}
        <div className="post">
          <img src="https://ui-avatars.com/api/?name=HOTD&background=random" alt="HOTDZero" className="avatar" />
          <div className="post-content">
            <div className="post-header">
              <span className="name">[HOTDZero] HIGH SCHOOL OF THE DEAD ...</span>
              <CheckCircle2 size={16} className="verified-icon gold" fill="#ffd700" color="black" />
              <span className="handle">@HOTD_Ze... · Ad</span>
              <MoreHorizontal size={18} className="more-options" />
            </div>
            <div className="post-text">
              The TV anime 'HOTD' is being made into a game after about 15 years!
              &lt;Them&gt; are coming—A survival tower defense game set at the dawn of the apocalypse.<br/><br/>
              Start now and receive items worth over $600!
            </div>
            <div className="post-media ad-placeholder">
              <span className="ad-tag">HOTD</span>
            </div>
          </div>
        </div>
      </main>

      {/* Right Sidebar */}
      <aside className="right-sidebar">
        <div className="search-bar">
          <Search size={20} className="search-icon" />
          <input type="text" placeholder="Search" />
        </div>

        <div className="sidebar-card premium-card">
          <h2>Subscribe to Premium <span className="premium-tag small">50% off</span></h2>
          <p>Get rid of ads, see your analytics, boost your replies and unlock 20+ features.</p>
          <button className="subscribe-btn">Subscribe</button>
        </div>

        <div className="sidebar-card news-card">
          <h2>Today's News</h2>
          
          <div className="trend-item">
            <div className="trend-title">Wembanyama's 41-24 Double-Double Powers Spurs to Game 1 Win Over Thunder</div>
            <div className="trend-meta">
              <img src="https://ui-avatars.com/api/?name=Sport&background=random" className="tiny-avatar" alt="Sport" />
              <span>1 day ago · Sports · 232.8K posts</span>
            </div>
          </div>
          
          <div className="trend-item">
            <div className="trend-title">Dani Carvajal to Leave Real Madrid After 23 Years</div>
            <div className="trend-meta">
              <img src="https://ui-avatars.com/api/?name=News&background=random" className="tiny-avatar" alt="News" />
              <span>2 days ago · Sports · 123.6K posts</span>
            </div>
          </div>
        </div>
        
        <div className="sidebar-card trends-card">
          <h2>What's happening</h2>
          <div className="trend-item">
            <div className="trend-category">Trending in Bangladesh <MoreHorizontal size={16} /></div>
            <div className="trend-name">#ReactJS</div>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default App;