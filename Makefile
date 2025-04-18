.PHONY: release

release:
	@echo "Building release..."
	@git branch --set-upstream-to=origin/main || true
	@npx release-it