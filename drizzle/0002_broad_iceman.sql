CREATE TABLE "recruitment" (
	"id" text PRIMARY KEY NOT NULL,
	"clan_name" text NOT NULL,
	"tier" text NOT NULL,
	"region" text NOT NULL,
	"slot" text NOT NULL,
	"image" text NOT NULL,
	"status" text NOT NULL,
	"created_by" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "recruitment" ADD CONSTRAINT "recruitment_created_by_user_id_fk" FOREIGN KEY ("created_by") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;