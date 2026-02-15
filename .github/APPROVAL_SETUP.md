# GitHub Actions Approval Setup

The deployment workflow now includes an approval gate before deploying to production.

## How to Enable Approval

1. **Go to your repository settings:**
   - Navigate to: `Settings` → `Environments`

2. **Create the `approval-required` environment:**
   - Click "New environment"
   - Name it: `approval-required`
   - Click "Configure environment"

3. **Add protection rules:**
   - Check "Required reviewers"
   - Add yourself and/or team members who should approve deployments
   - (Optional) Set a wait timer (e.g., 5 minutes)
   - Click "Save protection rules"

4. **Optional: Configure the github-pages environment**
   - You can also add reviewers to the `github-pages` environment for additional control

## Workflow Process

1. **Build** → Runs automatically on push to `main`
2. **Approve** → Waits for manual approval from designated reviewers
3. **Deploy** → Proceeds only after approval is granted

## How to Approve a Deployment

When a workflow is waiting for approval:

1. Go to the **Actions** tab in your repository
2. Click on the workflow run that's waiting
3. You'll see a "Review deployments" button
4. Select the environment and click "Approve and deploy"

## Testing

- Push to `main` branch or trigger workflow manually
- The workflow will pause at the approval step
- You'll receive a notification (if configured) to review the deployment
- Approve or reject from the Actions tab

---

**Note:** Environment protection rules require a GitHub Pro account for private repositories, but are free for public repositories.
