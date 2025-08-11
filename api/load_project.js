module.exports = (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed. Use POST.' });
  }
  res.status(200).json({
  "project_id": "demo-123",
  "documents": {
    "PRD.md": "# PRD (loaded)",
    "Tasks.md": "- [ ] item",
    "Designs.md": "## screens"
  },
  "design_system": {
    "tokens": {
      "color": {
        "primary": "#4A00E0",
        "secondary": "#8E2DE2",
        "surface": "#0D0D0D",
        "text": "#FFFFFF"
      },
      "spacing": [
        4,
        8,
        12,
        16,
        24,
        32
      ],
      "radius": [
        8,
        12,
        16
      ],
      "elevation": [
        0,
        1,
        2,
        4
      ]
    },
    "components": [
      "Button",
      "Input",
      "Select",
      "Checkbox",
      "Card",
      "Navbar",
      "Modal",
      "Toast",
      "ProgressBar"
    ]
  },
  "screens": [
    {
      "name": "Auth",
      "layout": "Split screen: brand left, login form right",
      "copy": {
        "title": "Welcome to TripSplit",
        "cta": "Continue"
      },
      "states": [
        "default",
        "error"
      ]
    },
    {
      "name": "Trip List",
      "layout": "List of trips with Add Trip FAB; each row shows totals/settled",
      "copy": {
        "title": "Your Trips",
        "empty": "No trips yet"
      },
      "states": [
        "default",
        "empty",
        "loading",
        "error"
      ]
    },
    {
      "name": "Trip Detail",
      "layout": "Tabs: Expenses | Balances | Members; header shows trip total",
      "copy": {
        "title": "Barcelona 2025",
        "cta": "Add Expense"
      },
      "states": [
        "default",
        "loading",
        "error"
      ]
    },
    {
      "name": "Add Expense",
      "layout": "Form: title, amount, currency, payer, participants, receipt upload",
      "copy": {
        "title": "Add Expense",
        "cta": "Save"
      },
      "states": [
        "default",
        "invalid",
        "saving",
        "error"
      ]
    },
    {
      "name": "Settle Up",
      "layout": "Who owes whom list + buttons to mark settled",
      "copy": {
        "title": "Settle Up",
        "cta": "Mark as settled"
      },
      "states": [
        "default",
        "empty",
        "error"
      ]
    },
    {
      "name": "Settings",
      "layout": "Profile, currency defaults, notifications, export data",
      "copy": {
        "title": "Settings"
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Empty",
      "layout": "Illustration + CTA to create first trip",
      "copy": {
        "title": "No data yet",
        "cta": "Create your first trip"
      },
      "states": [
        "default"
      ]
    },
    {
      "name": "Error",
      "layout": "Friendly error with retry button",
      "copy": {
        "title": "Something went wrong",
        "cta": "Retry"
      },
      "states": [
        "default"
      ]
    }
  ]
});
};
