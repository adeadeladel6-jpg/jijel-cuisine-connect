import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { CalendarDays, Banknote, Loader2 } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function Reservation() {
  const { t } = useLang();
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    notes: "",
  });

  const set = (k: keyof typeof form, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const name = form.name.trim();
    const phone = form.phone.trim();
    const validPhone = /^[+0-9 ]{8,20}$/.test(phone);
    if (name.length < 2 || name.length > 80 || !validPhone || !form.date || !form.time) {
      toast.error(t("resErr"));
      return;
    }
    setSaving(true);
    const { error } = await supabase.from("reservations").insert({
      name,
      phone,
      reservation_date: form.date,
      reservation_time: form.time,
      guests: Number(form.guests),
      notes: form.notes.trim() || null,
    });
    setSaving(false);
    if (error) {
      toast.error(t("resFail"));
      return;
    }
    toast.success(t("resOk"), { description: t("resOkDesc") });
    setForm({ name: "", phone: "", date: "", time: "", guests: "2", notes: "" });
  };


  return (
    <section id="reserve" className="scroll-mt-20 bg-background py-20">
      <div className="mx-auto max-w-3xl px-5">
        <div className="text-center">
          <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
            {t("resKicker")}
          </span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{t("resTitle")}</h2>
          <div className="gold-rule mx-auto mt-4" />
          <p className="mt-4 text-sm text-muted-foreground">{t("resSubtitle")}</p>
        </div>

        <form
          onSubmit={onSubmit}
          className="mt-10 rounded-3xl border border-border bg-card p-6 shadow-warm sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="r-name">{t("fName")}</Label>
              <Input
                id="r-name"
                maxLength={80}
                value={form.name}
                onChange={(e) => set("name", e.target.value)}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="r-phone">{t("fPhone")}</Label>
              <Input
                id="r-phone"
                type="tel"
                dir="ltr"
                maxLength={20}
                placeholder="+213 6.. .. .. .."
                value={form.phone}
                onChange={(e) => set("phone", e.target.value)}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="r-date">{t("fDate")}</Label>
              <Input
                id="r-date"
                type="date"
                value={form.date}
                onChange={(e) => set("date", e.target.value)}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="r-time">{t("fTime")}</Label>
              <Input
                id="r-time"
                type="time"
                value={form.time}
                onChange={(e) => set("time", e.target.value)}
                required
              />
            </div>
            <div className="grid gap-2 sm:col-span-2">
              <Label htmlFor="r-guests">{t("fGuests")}</Label>
              <select
                id="r-guests"
                value={form.guests}
                onChange={(e) => set("guests", e.target.value)}
                className="h-9 rounded-md border border-input bg-transparent px-3 text-sm text-foreground focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none"
              >
                {Array.from({ length: 20 }, (_, i) => i + 1).map((n) => (
                  <option key={n} value={n} className="bg-card">
                    {n} {t("guests")}
                  </option>
                ))}
              </select>
            </div>
            <div className="grid gap-2 sm:col-span-2">
              <Label htmlFor="r-notes">{t("fNotes")}</Label>
              <Textarea
                id="r-notes"
                rows={3}
                maxLength={500}
                placeholder={t("fNotesPh")}
                value={form.notes}
                onChange={(e) => set("notes", e.target.value)}
              />
            </div>
          </div>

          <div className="mt-6 flex items-start gap-3 rounded-xl border border-primary/30 bg-primary/10 p-4">
            <Banknote className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <p className="text-sm text-foreground">{t("resCashNotice")}</p>
          </div>

          <Button type="submit" variant="gold" size="lg" className="mt-6 w-full" disabled={saving}>
            {saving ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              <CalendarDays className="h-5 w-5" />
            )}{" "}
            {t("fSubmit")}
          </Button>

        </form>
      </div>
    </section>
  );
}
