import React, { useState } from 'react';
import {
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar
} from 'recharts';
import '../styles/SalesDashboard.css';

const SalesDashboard = () => {
  // Flower sales data with ranking and likes
  const [flowersData] = useState([
    { id: 1, name: 'Rose', likes: 450, sales: 1200, rank: 1, color: '#ff6b6b' },
    { id: 2, name: 'Tulip', likes: 380, sales: 950, rank: 2, color: '#ffa500' },
    { id: 3, name: 'Sunflower', likes: 520, sales: 1100, rank: 3, color: '#ffd700' },
    { id: 4, name: 'Lily', likes: 390, sales: 880, rank: 4, color: '#ff69b4' },
    { id: 5, name: 'Daisy', likes: 280, sales: 620, rank: 5, color: '#90ee90' },
    { id: 6, name: 'Orchid', likes: 410, sales: 1050, rank: 6, color: '#da70d6' }
  ]);

  // Time series data for line chart (weekly sales)
  const [weeklyData] = useState([
    { week: 'Week 1', Rose: 180, Tulip: 140, Sunflower: 160, Lily: 130, Daisy: 90, Orchid: 150 },
    { week: 'Week 2', Rose: 200, Tulip: 160, Sunflower: 180, Lily: 145, Daisy: 100, Orchid: 165 },
    { week: 'Week 3', Rose: 220, Tulip: 175, Sunflower: 200, Lily: 160, Daisy: 115, Orchid: 180 },
    { week: 'Week 4', Rose: 240, Tulip: 190, Sunflower: 220, Lily: 175, Daisy: 130, Orchid: 195 },
    { week: 'Week 5', Rose: 260, Tulip: 210, Sunflower: 240, Lily: 190, Daisy: 145, Orchid: 210 },
    { week: 'Week 6', Rose: 300, Tulip: 235, Sunflower: 260, Lily: 210, Daisy: 160, Orchid: 230 }
  ]);

  // Ranking data for pie chart
  const rankingData = flowersData.map(flower => ({
    name: flower.name,
    value: flower.sales,
    color: flower.color
  }));

  // Likes data for pie chart
  const likesData = flowersData.map(flower => ({
    name: flower.name,
    value: flower.likes,
    color: flower.color
  }));

  const COLORS = ['#ff6b6b', '#ffa500', '#ffd700', '#ff69b4', '#90ee90', '#da70d6'];

  return (
    <div className="sales-dashboard">
      <div className="dashboard-header">
        <h1>🌸 Flower Sales Dashboard</h1>
        <p>Real-time flower sales analytics and performance metrics</p>
      </div>

      {/* Summary Cards */}
      <div className="summary-cards">
        <div className="card">
          <h3>Total Sales</h3>
          <p className="card-value">${flowersData.reduce((sum, f) => sum + f.sales * 10, 0)}</p>
        </div>
        <div className="card">
          <h3>Total Likes</h3>
          <p className="card-value">{flowersData.reduce((sum, f) => sum + f.likes, 0)}</p>
        </div>
        <div className="card">
          <h3>Top Flower</h3>
          <p className="card-value">{flowersData[0].name}</p>
        </div>
        <div className="card">
          <h3>Varieties</h3>
          <p className="card-value">{flowersData.length}</p>
        </div>
      </div>

      {/* Ranking Table */}
      <div className="ranking-section">
        <h2>📊 Flower Rankings</h2>
        <table className="ranking-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Flower Name</th>
              <th>Sales</th>
              <th>Likes</th>
              <th>Likes per Sale</th>
            </tr>
          </thead>
          <tbody>
            {flowersData.map((flower) => (
              <tr key={flower.id} className="rank-row">
                <td className="rank-badge">{flower.rank}</td>
                <td>
                  <span
                    className="flower-name"
                    style={{ borderLeftColor: flower.color }}
                  >
                    {flower.name}
                  </span>
                </td>
                <td>${flower.sales * 10}</td>
                <td>
                  <span className="likes-badge">{flower.likes} ❤️</span>
                </td>
                <td>{(flower.likes / (flower.sales / 10)).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Charts Section */}
      <div className="charts-container">
        {/* Line Chart - Weekly Sales Trend */}
        <div className="chart-card">
          <h2>📈 Weekly Sales Trend</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="week" />
              <YAxis />
              <Tooltip contentStyle={{ backgroundColor: '#f5f5f5', borderRadius: '8px' }} />
              <Legend />
              <Line type="monotone" dataKey="Rose" stroke="#ff6b6b" strokeWidth={2} />
              <Line type="monotone" dataKey="Tulip" stroke="#ffa500" strokeWidth={2} />
              <Line type="monotone" dataKey="Sunflower" stroke="#ffd700" strokeWidth={2} />
              <Line type="monotone" dataKey="Lily" stroke="#ff69b4" strokeWidth={2} />
              <Line type="monotone" dataKey="Daisy" stroke="#90ee90" strokeWidth={2} />
              <Line type="monotone" dataKey="Orchid" stroke="#da70d6" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart - Sales Distribution */}
        <div className="chart-card">
          <h2>🥧 Sales Distribution by Flower</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={rankingData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {rankingData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `$${value * 10}`} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart - Likes Distribution */}
        <div className="chart-card">
          <h2>❤️ Likes Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={likesData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {likesData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `${value} likes`} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart - Ranking Comparison */}
        <div className="chart-card">
          <h2>📊 Sales vs Likes Comparison</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={flowersData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="sales" fill="#8884d8" name="Sales ($)" />
              <Bar dataKey="likes" fill="#82ca9d" name="Likes" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="metrics-section">
        <h2>📈 Performance Metrics</h2>
        <div className="metrics-grid">
          {flowersData.map((flower) => (
            <div key={flower.id} className="metric-card">
              <div className="metric-header">
                <h3>{flower.name}</h3>
                <span className="rank-label">#{flower.rank}</span>
              </div>
              <div className="metric-body">
                <div className="metric-item">
                  <span className="label">Sales:</span>
                  <span className="value">${flower.sales * 10}</span>
                </div>
                <div className="metric-item">
                  <span className="label">Likes:</span>
                  <span className="value likes">{flower.likes} ❤️</span>
                </div>
                <div className="metric-item">
                  <span className="label">Engagement:</span>
                  <span className="value">{(flower.likes / (flower.sales / 10)).toFixed(2)}</span>
                </div>
              </div>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{
                    width: `${(flower.likes / 520) * 100}%`,
                    backgroundColor: flower.color
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SalesDashboard;
