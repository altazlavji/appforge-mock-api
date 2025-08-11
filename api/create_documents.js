module.exports = (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed. Use POST.' });
  }
  res.status(200).json({
  "prd_md": "# PRD: TripSplit\n\n**Assumptions**\n- Mobile-first, with optional web later\n- Audience: friends/family/students on group trips\n\n**Goals**\n- Add expenses fast; split fairly; settle easily\n\n**User Stories**\n- As a traveler, I can create a trip and invite friends\n- As a payer, I can add an expense with payer, amount, splits\n\n**Flows**\n- Create/Join Trip \u2192 Add Expense \u2192 Review Balances \u2192 Settle Up\n\n**Edge/Error Cases**\n- No network during save\n- Duplicate expense\n- Currency mismatch across travelers\n\n**Success Metrics**\n- First split complete < 60s\n- 80% complete a settlement in < 3 steps",
  "tasks_md": "- [ ] Project scaffold\n- [ ] Trip create/join flow\n- [ ] Add expense form (receipt upload)\n- [ ] Balances & settle-up logic\n- [ ] Notifications (optional)\n- [ ] Empty/error states\n- [ ] Accessibility pass (WCAG 2.2 AA)\n- [ ] Smoke tests\n",
  "designs_md": "## Screens\n- Onboarding / Auth\n- Trip List (Home)\n- Trip Detail (expenses, balances)\n- Add/Edit Expense\n- Settle Up (history)\n- Settings\n- Empty State, Error State\n\n## Components\n- Button, Input, Select, Checkbox, Card, Navbar, Modal, Toast, ProgressBar",
  "screen_list": [
    "Auth",
    "Trip List",
    "Trip Detail",
    "Add Expense",
    "Settle Up",
    "Settings",
    "Empty",
    "Error"
  ]
});
};
