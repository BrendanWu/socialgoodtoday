import React from "react";

const AdminDashboard = () => {
  return (
    <div>
      <div className="header">
        <div className="container-fluid">
          {/* Body */}
          <div className="header-body">
            <div className="row align-items-end">
              <div className="col">
                {/* Pretitle */}
                <h6 className="header-pretitle">Overview</h6>
                {/* Title */}
                <h1 className="header-title">Dashboard</h1>
              </div>
              <div className="col-auto">
                {/* Button */}
                <a href="#!" className="btn btn-primary lift">
                  Create Report
                </a>
              </div>
            </div>{" "}
            {/* / .row */}
          </div>{" "}
          {/* / .header-body */}
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-lg-6 col-xl">
            {/* Value  */}
            <div className="card">
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col">
                    {/* Title */}
                    <h6 className="text-uppercase text-muted mb-2">Value</h6>
                    {/* Heading */}
                    <span className="h2 mb-0">$24,500</span>
                    {/* Badge */}
                    <span className="badge badge-soft-success mt-n1">
                      +3.5%
                    </span>
                  </div>
                  <div className="col-auto">
                    {/* Icon */}
                    <span className="h2 fe fe-dollar-sign text-muted mb-0" />
                  </div>
                </div>{" "}
                {/* / .row */}
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl">
            {/* Hours */}
            <div className="card">
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col">
                    {/* Title */}
                    <h6 className="text-uppercase text-muted mb-2">
                      Total hours
                    </h6>
                    {/* Heading */}
                    <span className="h2 mb-0">763.5</span>
                  </div>
                  <div className="col-auto">
                    {/* Icon */}
                    <span className="h2 fe fe-briefcase text-muted mb-0" />
                  </div>
                </div>{" "}
                {/* / .row */}
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl">
            {/* Exit */}
            <div className="card">
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col">
                    {/* Title */}
                    <h6 className="text-uppercase text-muted mb-2">Exit %</h6>
                    {/* Heading */}
                    <span className="h2 mb-0">35.5%</span>
                  </div>
                  <div className="col-auto">
                    {/* Chart */}
                    <div className="chart chart-sparkline">
                      <canvas className="chart-canvas" id="sparklineChart" />
                    </div>
                  </div>
                </div>{" "}
                {/* / .row */}
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl">
            {/* Time */}
            <div className="card">
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col">
                    {/* Title */}
                    <h6 className="text-uppercase text-muted mb-2">
                      Avg. Time
                    </h6>
                    {/* Heading */}
                    <span className="h2 mb-0">2:37</span>
                  </div>
                  <div className="col-auto">
                    {/* Icon */}
                    <span className="h2 fe fe-clock text-muted mb-0" />
                  </div>
                </div>{" "}
                {/* / .row */}
              </div>
            </div>
          </div>
        </div>{" "}
        {/* / .row */}
        <div className="row">
          <div className="col-12 col-xl-8">
            {/* Convertions */}
            <div className="card">
              <div className="card-header">
                {/* Title */}
                <h4 className="card-header-title">Conversions</h4>
                {/* Caption */}
                <span className="text-muted mr-3">Last year comparision:</span>
                {/* Switch */}
                <div className="custom-control custom-switch">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="cardToggle"
                    data-toggle="chart"
                    data-target="#conversionsChart"
                    data-trigger="change"
                    data-action="add"
                    data-dataset={1}
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="cardToggle"
                  />
                </div>
              </div>
              <div className="card-body">
                {/* Chart */}
                <div className="chart">
                  <canvas id="conversionsChart" className="chart-canvas" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-4">
            {/* Traffic */}
            <div className="card">
              <div className="card-header">
                {/* Title */}
                <h4 className="card-header-title">Traffic Channels</h4>
                {/* Tabs */}
                <ul className="nav nav-tabs nav-tabs-sm card-header-tabs">
                  <li
                    className="nav-item"
                    data-toggle="chart"
                    data-target="#trafficChart"
                    data-trigger="click"
                    data-action="toggle"
                    data-dataset={0}
                  >
                    <a href="#" className="nav-link active" data-toggle="tab">
                      All
                    </a>
                  </li>
                  <li
                    className="nav-item"
                    data-toggle="chart"
                    data-target="#trafficChart"
                    data-trigger="click"
                    data-action="toggle"
                    data-dataset={1}
                  >
                    <a href="#" className="nav-link" data-toggle="tab">
                      Direct
                    </a>
                  </li>
                </ul>
              </div>
              <div className="card-body">
                {/* Chart */}
                <div className="chart chart-appended">
                  <canvas
                    id="trafficChart"
                    className="chart-canvas"
                    data-toggle="legend"
                    data-target="#trafficChartLegend"
                  />
                </div>
                {/* Legend */}
                <div id="trafficChartLegend" className="chart-legend" />
              </div>
            </div>
          </div>
        </div>{" "}
        {/* / .row */}
        <div className="row">
          <div className="col-12 col-xl-4">
            {/* Projects */}
            <div className="card card-fill">
              <div className="card-header">
                {/* Title */}
                <h4 className="card-header-title">Projects</h4>
                {/* Link */}
                <a href="project-overview.html" className="small">
                  View all
                </a>
              </div>
              <div className="card-body">
                {/* List group */}
                <div className="list-group list-group-flush my-n3">
                  <div className="list-group-item">
                    <div className="row align-items-center">
                      <div className="col-auto">
                        {/* Avatar */}
                        <a
                          href="project-overview.html"
                          className="avatar avatar-4by3"
                        >
                          <img
                            src="assets/img/avatars/projects/project-1.jpg"
                            alt="..."
                            className="avatar-img rounded"
                          />
                        </a>
                      </div>
                      <div className="col ml-n2">
                        {/* Title */}
                        <h4 className="mb-1">
                          <a href="project-overview.html">Homepage Redesign</a>
                        </h4>
                        {/* Time */}
                        <p className="card-text small text-muted">
                          <time dateTime="2018-05-24">Updated 4hr ago</time>
                        </p>
                      </div>
                      <div className="col-auto">
                        {/* Dropdown */}
                        <div className="dropdown">
                          <a
                            href="#"
                            className="dropdown-ellipses dropdown-toggle"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="fe fe-more-vertical" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a href="#!" className="dropdown-item">
                              Action
                            </a>
                            <a href="#!" className="dropdown-item">
                              Another action
                            </a>
                            <a href="#!" className="dropdown-item">
                              Something else here
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>{" "}
                    {/* / .row */}
                  </div>
                  <div className="list-group-item">
                    <div className="row align-items-center">
                      <div className="col-auto">
                        {/* Avatar */}
                        <a
                          href="project-overview.html"
                          className="avatar avatar-4by3"
                        >
                          <img
                            src="assets/img/avatars/projects/project-2.jpg"
                            alt="..."
                            className="avatar-img rounded"
                          />
                        </a>
                      </div>
                      <div className="col ml-n2">
                        {/* Title */}
                        <h4 className="mb-1">
                          <a href="project-overview.html">Travels &amp; Time</a>
                        </h4>
                        {/* Time */}
                        <p className="card-text small text-muted">
                          <time dateTime="2018-05-24">Updated 4hr ago</time>
                        </p>
                      </div>
                      <div className="col-auto">
                        {/* Dropdown */}
                        <div className="dropdown">
                          <a
                            href="#"
                            className="dropdown-ellipses dropdown-toggle"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="fe fe-more-vertical" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a href="#!" className="dropdown-item">
                              Action
                            </a>
                            <a href="#!" className="dropdown-item">
                              Another action
                            </a>
                            <a href="#!" className="dropdown-item">
                              Something else here
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>{" "}
                    {/* / .row */}
                  </div>
                  <div className="list-group-item">
                    <div className="row align-items-center">
                      <div className="col-auto">
                        {/* Avatar */}
                        <a
                          href="project-overview.html"
                          className="avatar avatar-4by3"
                        >
                          <img
                            src="assets/img/avatars/projects/project-3.jpg"
                            alt="..."
                            className="avatar-img rounded"
                          />
                        </a>
                      </div>
                      <div className="col ml-n2">
                        {/* Title */}
                        <h4 className="mb-1">
                          <a href="project-overview.html">Safari Exploration</a>
                        </h4>
                        {/* Time */}
                        <p className="card-text small text-muted">
                          <time dateTime="2018-05-24">Updated 4hr ago</time>
                        </p>
                      </div>
                      <div className="col-auto">
                        {/* Dropdown */}
                        <div className="dropdown">
                          <a
                            href="#"
                            className="dropdown-ellipses dropdown-toggle"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="fe fe-more-vertical" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a href="#!" className="dropdown-item">
                              Action
                            </a>
                            <a href="#!" className="dropdown-item">
                              Another action
                            </a>
                            <a href="#!" className="dropdown-item">
                              Something else here
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>{" "}
                    {/* / .row */}
                  </div>
                  <div className="list-group-item">
                    <div className="row align-items-center">
                      <div className="col-auto">
                        {/* Avatar */}
                        <a
                          href="project-overview.html"
                          className="avatar avatar-4by3"
                        >
                          <img
                            src="assets/img/avatars/projects/project-5.jpg"
                            alt="..."
                            className="avatar-img rounded"
                          />
                        </a>
                      </div>
                      <div className="col ml-n2">
                        {/* Title */}
                        <h4 className="mb-1">
                          <a href="project-overview.html">Personal Site</a>
                        </h4>
                        {/* Time */}
                        <p className="card-text small text-muted">
                          <time dateTime="2018-05-24">Updated 4hr ago</time>
                        </p>
                      </div>
                      <div className="col-auto">
                        {/* Dropdown */}
                        <div className="dropdown">
                          <a
                            href="#"
                            className="dropdown-ellipses dropdown-toggle"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="fe fe-more-vertical" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a href="#!" className="dropdown-item">
                              Action
                            </a>
                            <a href="#!" className="dropdown-item">
                              Another action
                            </a>
                            <a href="#!" className="dropdown-item">
                              Something else here
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>{" "}
                    {/* / .row */}
                  </div>
                </div>
              </div>{" "}
              {/* / .card-body */}
            </div>{" "}
            {/* / .card */}
          </div>
          <div className="col-12 col-xl-8">
            {/* Sales */}
            <div className="card">
              <div className="card-header">
                {/* Title */}
                <h4 className="card-header-title">Sales</h4>
                {/* Nav */}
                <ul className="nav nav-tabs nav-tabs-sm card-header-tabs">
                  <li
                    className="nav-item"
                    data-toggle="chart"
                    data-target="#salesChart"
                    data-trigger="click"
                    data-action="toggle"
                    data-dataset={0}
                  >
                    <a className="nav-link active" href="#" data-toggle="tab">
                      All
                    </a>
                  </li>
                  <li
                    className="nav-item"
                    data-toggle="chart"
                    data-target="#salesChart"
                    data-trigger="click"
                    data-action="toggle"
                    data-dataset={1}
                  >
                    <a className="nav-link" href="#" data-toggle="tab">
                      Direct
                    </a>
                  </li>
                  <li
                    className="nav-item"
                    data-toggle="chart"
                    data-target="#salesChart"
                    data-trigger="click"
                    data-action="toggle"
                    data-dataset={2}
                  >
                    <a className="nav-link" href="#" data-toggle="tab">
                      Organic
                    </a>
                  </li>
                </ul>
              </div>
              <div className="card-body">
                {/* Chart */}
                <div className="chart">
                  <canvas id="salesChart" className="chart-canvas" />
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* / .row */}
        <div className="row">
          <div className="col-12">
            {/* Goals */}
            <div className="card">
              <div className="card-header">
                <div className="row align-items-center">
                  <div className="col">
                    {/* Title */}
                    <h4 className="card-header-title">Goals</h4>
                  </div>
                  <div className="col-auto">
                    {/* Button */}
                    <a href="#!" className="btn btn-sm btn-white">
                      Export
                    </a>
                  </div>
                </div>{" "}
                {/* / .row */}
              </div>
              <div
                className="table-responsive mb-0"
                data-list='{"valueNames": ["goal-project", "goal-status", "goal-progress", "goal-date"]}'
              >
                <table className="table table-sm table-nowrap card-table">
                  <thead>
                    <tr>
                      <th>
                        <a
                          href="#"
                          className="text-muted list-sort"
                          data-sort="goal-project"
                        >
                          Goal
                        </a>
                      </th>
                      <th>
                        <a
                          href="#"
                          className="text-muted list-sort"
                          data-sort="goal-status"
                        >
                          Status
                        </a>
                      </th>
                      <th>
                        <a
                          href="#"
                          className="text-muted list-sort"
                          data-sort="goal-progress"
                        >
                          Progress
                        </a>
                      </th>
                      <th>
                        <a
                          href="#"
                          className="text-muted list-sort"
                          data-sort="goal-date"
                        >
                          Due date
                        </a>
                      </th>
                      <th className="text-right">Team</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody className="list">
                    <tr>
                      <td className="goal-project">Update the API</td>
                      <td className="goal-status">
                        <span className="text-warning">●</span> In progress
                      </td>
                      <td className="goal-progress">55%</td>
                      <td className="goal-date">
                        <time dateTime="2018-10-24">07/24/18</time>
                      </td>
                      <td className="text-right">
                        <div className="avatar-group">
                          <a
                            href="profile-posts.html"
                            className="avatar avatar-xs"
                            data-toggle="tooltip"
                            title
                            data-original-title="Dianna Smiley"
                          >
                            <img
                              src="assets/img/avatars/profiles/avatar-1.jpg"
                              className="avatar-img rounded-circle"
                              alt="..."
                            />
                          </a>
                          <a
                            href="profile-posts.html"
                            className="avatar avatar-xs"
                            data-toggle="tooltip"
                            title
                            data-original-title="Ab Hadley"
                          >
                            <img
                              src="assets/img/avatars/profiles/avatar-2.jpg"
                              className="avatar-img rounded-circle"
                              alt="..."
                            />
                          </a>
                          <a
                            href="profile-posts.html"
                            className="avatar avatar-xs"
                            data-toggle="tooltip"
                            title
                            data-original-title="Adolfo Hess"
                          >
                            <img
                              src="assets/img/avatars/profiles/avatar-3.jpg"
                              className="avatar-img rounded-circle"
                              alt="..."
                            />
                          </a>
                          <a
                            href="profile-posts.html"
                            className="avatar avatar-xs"
                            data-toggle="tooltip"
                            title
                            data-original-title="Daniela Dewitt"
                          >
                            <img
                              src="assets/img/avatars/profiles/avatar-4.jpg"
                              className="avatar-img rounded-circle"
                              alt="..."
                            />
                          </a>
                        </div>
                      </td>
                      <td className="text-right">
                        <div className="dropdown">
                          <a
                            href="#"
                            className="dropdown-ellipses dropdown-toggle"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="fe fe-more-vertical" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a href="#!" className="dropdown-item">
                              Action
                            </a>
                            <a href="#!" className="dropdown-item">
                              Another action
                            </a>
                            <a href="#!" className="dropdown-item">
                              Something else here
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="goal-project">Release v1.2-Beta</td>
                      <td className="goal-status">
                        <span className="text-warning">●</span> In progress
                      </td>
                      <td className="goal-progress">25%</td>
                      <td className="goal-date">
                        <time dateTime="2018-10-24">08/26/18</time>
                      </td>
                      <td className="text-right">
                        <div className="avatar-group justify-content-end">
                          <a
                            href="#!"
                            className="avatar avatar-xs"
                            data-toggle="tooltip"
                            title
                            data-original-title="Dianna Smiley"
                          >
                            <img
                              src="assets/img/avatars/profiles/avatar-1.jpg"
                              className="avatar-img rounded-circle"
                              alt="..."
                            />
                          </a>
                          <a
                            href="#!"
                            className="avatar avatar-xs"
                            data-toggle="tooltip"
                            title
                            data-original-title="Ab Hadley"
                          >
                            <img
                              src="assets/img/avatars/profiles/avatar-2.jpg"
                              className="avatar-img rounded-circle"
                              alt="..."
                            />
                          </a>
                          <a
                            href="#!"
                            className="avatar avatar-xs"
                            data-toggle="tooltip"
                            title
                            data-original-title="Adolfo Hess"
                          >
                            <img
                              src="assets/img/avatars/profiles/avatar-3.jpg"
                              className="avatar-img rounded-circle"
                              alt="..."
                            />
                          </a>
                        </div>
                      </td>
                      <td className="text-right">
                        <div className="dropdown">
                          <a
                            href="#"
                            className="dropdown-ellipses dropdown-toggle"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="fe fe-more-vertical" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a href="#!" className="dropdown-item">
                              Action
                            </a>
                            <a href="#!" className="dropdown-item">
                              Another action
                            </a>
                            <a href="#!" className="dropdown-item">
                              Something else here
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="goal-project">GDPR Compliance</td>
                      <td className="goal-status">
                        <span className="text-success">●</span> Completed
                      </td>
                      <td className="goal-progress">100%</td>
                      <td className="goal-date">
                        <time dateTime="2018-10-24">06/19/18</time>
                      </td>
                      <td className="text-right">
                        <div className="avatar-group justify-content-end">
                          <a
                            href="#!"
                            className="avatar avatar-xs"
                            data-toggle="tooltip"
                            title
                            data-original-title="Dianna Smiley"
                          >
                            <img
                              src="assets/img/avatars/profiles/avatar-1.jpg"
                              className="avatar-img rounded-circle"
                              alt="..."
                            />
                          </a>
                          <a
                            href="#!"
                            className="avatar avatar-xs"
                            data-toggle="tooltip"
                            title
                            data-original-title="Ab Hadley"
                          >
                            <img
                              src="assets/img/avatars/profiles/avatar-2.jpg"
                              className="avatar-img rounded-circle"
                              alt="..."
                            />
                          </a>
                          <a
                            href="#!"
                            className="avatar avatar-xs"
                            data-toggle="tooltip"
                            title
                            data-original-title="Adolfo Hess"
                          >
                            <img
                              src="assets/img/avatars/profiles/avatar-3.jpg"
                              className="avatar-img rounded-circle"
                              alt="..."
                            />
                          </a>
                        </div>
                      </td>
                      <td className="text-right">
                        <div className="dropdown">
                          <a
                            href="#"
                            className="dropdown-ellipses dropdown-toggle"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="fe fe-more-vertical" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a href="#!" className="dropdown-item">
                              Action
                            </a>
                            <a href="#!" className="dropdown-item">
                              Another action
                            </a>
                            <a href="#!" className="dropdown-item">
                              Something else here
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="goal-project">v1.2 Documentation</td>
                      <td className="goal-status">
                        <span className="text-danger">●</span> Cancelled
                      </td>
                      <td className="goal-progress">0%</td>
                      <td className="goal-date">
                        <time dateTime="2018-10-24">06/25/18</time>
                      </td>
                      <td className="text-right">
                        <div className="avatar-group justify-content-end">
                          <a
                            href="#!"
                            className="avatar avatar-xs"
                            data-toggle="tooltip"
                            title
                            data-original-title="Dianna Smiley"
                          >
                            <img
                              src="assets/img/avatars/profiles/avatar-1.jpg"
                              className="avatar-img rounded-circle"
                              alt="..."
                            />
                          </a>
                          <a
                            href="#!"
                            className="avatar avatar-xs"
                            data-toggle="tooltip"
                            title
                            data-original-title="Ab Hadley"
                          >
                            <img
                              src="assets/img/avatars/profiles/avatar-2.jpg"
                              className="avatar-img rounded-circle"
                              alt="..."
                            />
                          </a>
                        </div>
                      </td>
                      <td className="text-right">
                        <div className="dropdown">
                          <a
                            href="#"
                            className="dropdown-ellipses dropdown-toggle"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <span className="fe fe-more-vertical" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a href="#!" className="dropdown-item">
                              Action
                            </a>
                            <a href="#!" className="dropdown-item">
                              Another action
                            </a>
                            <a href="#!" className="dropdown-item">
                              Something else here
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="goal-project">Plan design offsite</td>
                      <td className="goal-status">
                        <span className="text-success">●</span> Completed
                      </td>
                      <td className="goal-progress">100%</td>
                      <td className="goal-date">
                        <time dateTime="2018-10-24">06/30/18</time>
                      </td>
                      <td className="text-right">
                        <div className="avatar-group justify-content-end">
                          <a
                            href="#!"
                            className="avatar avatar-xs"
                            data-toggle="tooltip"
                            title
                            data-original-title="Dianna Smiley"
                          >
                            <img
                              src="assets/img/avatars/profiles/avatar-1.jpg"
                              className="avatar-img rounded-circle"
                              alt="..."
                            />
                          </a>
                          <a
                            href="#!"
                            className="avatar avatar-xs"
                            data-toggle="tooltip"
                            title
                            data-original-title="Ab Hadley"
                          >
                            <img
                              src="assets/img/avatars/profiles/avatar-2.jpg"
                              className="avatar-img rounded-circle"
                              alt="..."
                            />
                          </a>
                          <a
                            href="#!"
                            className="avatar avatar-xs"
                            data-toggle="tooltip"
                            title
                            data-original-title="Adolfo Hess"
                          >
                            <img
                              src="assets/img/avatars/profiles/avatar-3.jpg"
                              className="avatar-img rounded-circle"
                              alt="..."
                            />
                          </a>
                          <a
                            href="#!"
                            className="avatar avatar-xs"
                            data-toggle="tooltip"
                            title
                            data-original-title="Daniela Dewitt"
                          >
                            <img
                              src="assets/img/avatars/profiles/avatar-4.jpg"
                              className="avatar-img rounded-circle"
                              alt="..."
                            />
                          </a>
                        </div>
                      </td>
                      <td className="text-right">
                        <div className="dropdown">
                          <a
                            href="#"
                            className="dropdown-ellipses dropdown-toggle"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="fe fe-more-vertical" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a href="#!" className="dropdown-item">
                              Action
                            </a>
                            <a href="#!" className="dropdown-item">
                              Another action
                            </a>
                            <a href="#!" className="dropdown-item">
                              Something else here
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* / .row */}
        <div className="row">
          <div className="col-12 col-xl-5">
            {/* Activity */}
            <div className="card card-fill">
              <div className="card-header">
                {/* Title */}
                <h4 className="card-header-title">Recent Activity</h4>
                {/* Button */}
                <a className="small" href="#!">
                  View all
                </a>
              </div>
              <div className="card-body">
                {/* List group */}
                <div className="list-group list-group-flush list-group-activity my-n3">
                  <div className="list-group-item">
                    <div className="row">
                      <div className="col-auto">
                        {/* Avatar */}
                        <div className="avatar avatar-sm avatar-online">
                          <img
                            className="avatar-img rounded-circle"
                            src="assets/img/avatars/profiles/avatar-1.jpg"
                            alt="..."
                          />
                        </div>
                      </div>
                      <div className="col ml-n2">
                        {/* Heading */}
                        <h5 className="mb-1">Dianna Smiley</h5>
                        {/* Text */}
                        <p className="small text-gray-700 mb-0">
                          Uploaded the files "Launchday Logo" and "New Design".
                        </p>
                        {/* Time */}
                        <small className="text-muted">2m ago</small>
                      </div>
                    </div>{" "}
                    {/* / .row */}
                  </div>
                  <div className="list-group-item">
                    <div className="row">
                      <div className="col-auto">
                        {/* Avatar */}
                        <div className="avatar avatar-sm avatar-online">
                          <img
                            className="avatar-img rounded-circle"
                            src="assets/img/avatars/profiles/avatar-2.jpg"
                            alt="..."
                          />
                        </div>
                      </div>
                      <div className="col ml-n2">
                        {/* Heading */}
                        <h5 className="mb-1">Ab Hadley</h5>
                        {/* Text */}
                        <p className="small text-gray-700 mb-0">
                          Shared the "Why Dashkit?" post with 124 subscribers.
                        </p>
                        {/* Time */}
                        <small className="text-muted">1h ago</small>
                      </div>
                    </div>{" "}
                    {/* / .row */}
                  </div>
                  <div className="list-group-item">
                    <div className="row">
                      <div className="col-auto">
                        {/* Avatar */}
                        <div className="avatar avatar-sm avatar-offline">
                          <img
                            className="avatar-img rounded-circle"
                            src="assets/img/avatars/profiles/avatar-3.jpg"
                            alt="..."
                          />
                        </div>
                      </div>
                      <div className="col ml-n2">
                        {/* Heading */}
                        <h5 className="mb-1">Adolfo Hess</h5>
                        {/* Text */}
                        <p className="small text-gray-700 mb-0">
                          Exported sales data from Launchday's subscriber data.
                        </p>
                        {/* Time */}
                        <small className="text-muted">3h ago</small>
                      </div>
                    </div>
                    {/* / .row */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-7">
            {/* Checklist */}
            <div className="card">
              <div className="card-header">
                {/* Title */}
                <h4 className="card-header-title">Scratchpad Checklist</h4>
                {/* Badge */}
                <span className="badge badge-soft-secondary">23 Archived</span>
              </div>
              <div className="card-body">
                {/* Checklist */}
                <div className="checklist">
                  <div className="custom-control custom-checkbox checklist-control">
                    <input
                      className="custom-control-input"
                      id="checklistOne"
                      type="checkbox"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="checklistOne"
                    />
                    <span className="custom-control-caption">
                      Delete the old mess in functions files.
                    </span>
                  </div>
                  <div className="custom-control custom-checkbox checklist-control">
                    <input
                      className="custom-control-input"
                      id="checklistTwo"
                      type="checkbox"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="checklistTwo"
                    />
                    <span className="custom-control-caption">
                      Refactor the core social sharing modules
                    </span>
                  </div>
                  <div className="custom-control custom-checkbox checklist-control">
                    <input
                      className="custom-control-input"
                      id="checklistThree"
                      type="checkbox"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="checklistThree"
                    />
                    <span className="custom-control-caption">
                      Create the release notes for the new pages so customers
                      get psyched.
                    </span>
                  </div>
                  <div className="custom-control custom-checkbox checklist-control">
                    <input
                      className="custom-control-input"
                      id="checklistFour"
                      type="checkbox"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="checklistFour"
                    />
                    <span className="custom-control-caption">
                      Send Dianna those meeting notes
                    </span>
                  </div>
                  <div className="custom-control custom-checkbox checklist-control">
                    <input
                      className="custom-control-input"
                      id="checklistFive"
                      type="checkbox"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="checklistFive"
                    />
                    <span className="custom-control-caption">
                      Share the documentation for the new unified API
                    </span>
                  </div>
                  <div className="custom-control custom-checkbox checklist-control">
                    <input
                      className="custom-control-input"
                      id="checklistSix"
                      type="checkbox"
                      defaultChecked
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="checklistSix"
                    />
                    <span className="custom-control-caption">
                      Clean up the Figma file with all of the avatars, buttons,
                      and other components.
                    </span>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <div className="row align-items-center">
                  <div className="col">
                    {/* Input */}
                    <textarea
                      className="form-control form-control-flush form-control-auto"
                      data-toggle="autosize"
                      rows={1}
                      placeholder="Create a task"
                      defaultValue={""}
                    />
                  </div>
                  <div className="col-auto">
                    {/* Button */}
                    <button className="btn btn-sm btn-primary">Add</button>
                  </div>
                </div>{" "}
                {/* / .row */}
              </div>
            </div>
          </div>
        </div>{" "}
        {/* / .row */}
      </div>
    </div>
  );
};

export default AdminDashboard;
