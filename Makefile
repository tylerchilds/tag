DENO_VERSION := 1.14.1
DENO_INSTALL := third_party
include deno.mk

.PHONY: all
all: $(DENO_BIN)
	$(call deno, run --unstable --allow-read --allow-write scripts/build.js)
	$(call deno, bundle ./src/tag.js ./dist/tag.bundle.js)
	$(call deno, run --unstable --allow-read --allow-write --allow-run scripts/package.js)
