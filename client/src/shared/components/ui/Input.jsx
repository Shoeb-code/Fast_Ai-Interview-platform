import React, { useState } from "react";

const Input = ({
  label,
  type = "text",
  placeholder = "",
  value,
  onChange,
  name,
  error,
  helperText,
  leftIcon,
  rightIcon,
  className = "",
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";
  const inputType =
    isPassword && showPassword ? "text" : type;

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label className="mb-2 block text-sm font-medium text-gray-300">
          {label}
        </label>
      )}

      <div
        className={`
          flex items-center gap-3 rounded-2xl border
          bg-white/5 px-4 py-3 backdrop-blur-xl
          transition-all duration-300
          ${
            error
              ? "border-red-500/50"
              : "border-white/10 focus-within:border-indigo-500"
          }
        `}
      >
        {leftIcon && (
          <span className="text-gray-400">
            {leftIcon}
          </span>
        )}

        <input
          type={inputType}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full bg-transparent text-white placeholder-gray-500 outline-none"
          {...props}
        />

        {isPassword ? (
          <button
            type="button"
            onClick={() =>
              setShowPassword(!showPassword)
            }
            className="text-sm text-gray-400 hover:text-white"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        ) : (
          rightIcon && (
            <span className="text-gray-400">
              {rightIcon}
            </span>
          )
        )}
      </div>

      {error ? (
        <p className="mt-2 text-sm text-red-400">
          {error}
        </p>
      ) : helperText ? (
        <p className="mt-2 text-sm text-gray-500">
          {helperText}
        </p>
      ) : null}
    </div>
  );
};

export default Input;