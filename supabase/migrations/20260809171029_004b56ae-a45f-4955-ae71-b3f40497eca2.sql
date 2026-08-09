CREATE TABLE public.reservations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL CHECK (char_length(name) BETWEEN 2 AND 80),
  phone TEXT NOT NULL CHECK (char_length(phone) BETWEEN 8 AND 20),
  reservation_date DATE NOT NULL,
  reservation_time TIME NOT NULL,
  guests SMALLINT NOT NULL DEFAULT 2 CHECK (guests BETWEEN 1 AND 20),
  notes TEXT CHECK (notes IS NULL OR char_length(notes) <= 500),
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT INSERT ON public.reservations TO anon;
GRANT INSERT ON public.reservations TO authenticated;
GRANT ALL ON public.reservations TO service_role;

ALTER TABLE public.reservations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a reservation"
ON public.reservations FOR INSERT
TO anon, authenticated
WITH CHECK (status = 'pending');