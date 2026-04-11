import React, {
  useEffect,
  useState,
} from "react";
import ProfileHeader from "../components/profile/ProfileHeader";
import CareerCard from "../components/profile/CareerCard";
import ProfileInfoCard from "../components/profile/ProfileInfoCard";
import SocialLinksCard from "../components/profile/SocialLinksCard";
import EditProfileModal from "../components/profile/EditProfileModal";
import api from "../services/api";

const Profile = () => {
  const [profile, setProfile] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  const [editOpen, setEditOpen] =
    useState(false);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      setLoading(true);

      const res = await api.get(
        "/users/get-profile"
      );

      if (res.data.success) {
        setProfile(res.data.user);
      }
    } catch (err) {
      setError(
        "Failed to load profile"
      );
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = () => {
    setEditOpen(true);
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        Loading profile...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 text-red-400">
        {error}
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black px-6 py-10 text-white">
        <div className="mx-auto max-w-7xl space-y-8">
          {/* Header */}
          <ProfileHeader
            name={profile?.fullName}
            email={profile?.email}
            role={
              profile?.currentRole
            }
            tagline={profile?.bio}
            interviews={
              profile?.totalInterviews ||
              0
            }
            bestScore={
              profile?.bestScore || 0
            }
            onEdit={handleEdit}
          />

          {/* Main Grid */}
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Left */}
            <div className="space-y-6 lg:col-span-2">
              <CareerCard
                role={
                  profile?.currentRole
                }
                experience={
                  profile?.experience
                }
                course={
                  profile?.course
                }
                dreamCompany={
                  profile?.dreamCompany
                }
                skills={
                  Array.isArray(
                    profile?.skills
                  )
                    ? profile.skills.join(
                        ", "
                      )
                    : profile?.skills
                }
                goal={
                  profile?.objective
                }
              />

              <ProfileInfoCard
                fullName={
                  profile?.fullName
                }
                email={
                  profile?.email
                }
                phone={
                  profile?.phone
                }
                location={
                  profile?.location
                }
                website={
                  profile?.website
                }
                bio={profile?.bio}
                skills={
                  Array.isArray(
                    profile?.skills
                  )
                    ? profile.skills.join(
                        ", "
                      )
                    : profile?.skills
                }
                objective={
                  profile?.objective
                }
              />
            </div>

            {/* Right */}
            <div className="space-y-6">
              <SocialLinksCard
                linkedin={
                  profile?.linkedin
                }
                github={
                  profile?.github
                }
                leetcode={
                  profile?.leetcode
                }
                portfolio={
                  profile?.portfolio
                }
                resume={
                  profile?.resumeUrl
                }
              />
            </div>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      <EditProfileModal
        isOpen={editOpen}
        onClose={() =>
          setEditOpen(false)
        }
        profile={profile}
        setProfile={setProfile}
      />
    </>
  );
};

export default Profile;