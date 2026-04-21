ALTER TABLE "lobby" RENAME COLUMN "user_id" TO "created_by";--> statement-breakpoint
ALTER TABLE "lobby" DROP CONSTRAINT "lobby_user_id_user_id_fk";
--> statement-breakpoint
ALTER TABLE "lobby" ADD CONSTRAINT "lobby_created_by_user_id_fk" FOREIGN KEY ("created_by") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;