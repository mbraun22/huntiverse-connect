import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Login = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // First, check if the user exists
      const { data: { users }, error: searchError } = await supabase.auth.admin.listUsers({
        filters: {
          email: email
        }
      });

      if (searchError) throw searchError;

      if (!users || users.length === 0) {
        // New user - create account and sign in automatically
        const { error: signUpError } = await supabase.auth.signUp({
          email,
          options: {
            emailRedirectTo: window.location.origin,
          }
        });

        if (signUpError) throw signUpError;

        toast({
          title: "Welcome!",
          description: "Your account has been created and you're now signed in.",
        });
        
        navigate("/dashboard");
      } else {
        // Existing user - send magic link
        const { error: otpError } = await supabase.auth.signInWithOtp({
          email,
          options: {
            emailRedirectTo: window.location.origin,
          },
        });

        if (otpError) throw otpError;

        toast({
          title: "Magic link sent!",
          description: "Please check your email for the login link.",
        });
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-orange-100 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Scavenger Hunt Adventure
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full"
                disabled={isLoading}
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-orange-600 hover:bg-orange-700"
              disabled={isLoading}
            >
              {isLoading ? "Processing..." : "Continue with Email"}
            </Button>
            <p className="text-sm text-center text-muted-foreground mt-4">
              First time? You'll be automatically signed in.
              <br />
              Returning? We'll send you a magic link!
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
