DENO_VERSION := 1.14.1
DENO_INSTALL := third_party
include deno.mk

.PHONY: all
all: compile

compile: $(DENO_BIN)
	#copy
	$(call deno, run \
		--unstable \
		--allow-read \
		--allow-write \
		scripts/copy.js)

	# bundle
	$(call deno, bundle ./src/tag.js ./dist/tag.bundle.js)

	# build
	$(call deno, run \
		--unstable \
		--allow-read \
		--allow-write \
		--allow-run \
		scripts/build.js)

	# compile
	$(call deno, compile \
		--unstable \
		--allow-read \
		--allow-net \
		--output=website \
		scripts/server.js)
